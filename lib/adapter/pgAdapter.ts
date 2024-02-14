import type {
  Adapter,
  // AdapterUser,
  VerificationToken,
  AdapterSession,
} from "@auth/core/adapters";
import type { AdapterUser } from "./types/adapters";

import type { Pool } from "pg";

export function mapExpiresAt(account: any): any {
  const expires_at: number = parseInt(account.expires_at);
  return {
    ...account,
    expires_at,
  };
}

export default function pgAdapter(client: Pool): Adapter {
  return {
    async createVerificationToken(
      verificationToken: VerificationToken
    ): Promise<VerificationToken> {
      const { identifier, expires, token } = verificationToken;
      const sql = `
        INSERT INTO oauth_verification_token ( identifier, expires, token ) 
        VALUES ($1, $2, $3)
        `;
      await client.query(sql, [identifier, expires, token]);
      return verificationToken;
    },
    async useVerificationToken({
      identifier,
      token,
    }: {
      identifier: string;
      token: string;
    }): Promise<VerificationToken> {
      const sql = `delete from oauth_verification_token
      where identifier = $1 and token = $2
      RETURNING identifier, expires, token `;
      const result = await client.query(sql, [identifier, token]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },

    //@ts-ignore
    async createUser(user: Omit<AdapterUser, "id">) {
      const { name, email, email_verified, image_url } = user;
      const sql = `
        INSERT INTO dia_member (nickname, email, "email_verified", image_url, "github_id") 
        VALUES ($1, $2, $3, $4, $5) 
        RETURNING pk, nickname, email, "email_verified", image_url, "github_id"`;
      const result = await client.query(sql, [
        name,
        email,
        email_verified,
        image_url,
        user.username,
      ]);
      const adapterUser: AdapterUser = {
        id: result.rows[0].pk,
        email: result.rows[0].email,
        email_verified: result.rows[0].email_verified,
        image_url: result.rows[0].image_url,
        name: result.rows[0].nickname,
        username: result.rows[0].github_id,
      };
      return adapterUser;
    },
    async getUser(pk) {
      const sql = `select * from dia_member where pk = $1`;
      try {
        const result = await client.query(sql, [pk]);
        return result.rowCount === 0 ? null : result.rows[0];
      } catch (e) {
        return null;
      }
    },
    async getUserByEmail(email) {
      const sql = `select * from dia_member where email = $1`;
      const result = await client.query(sql, [email]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },
    //@ts-ignore
    async getUserByAccount({
      providerAccountId,
      provider,
    }): Promise<AdapterUser | null> {
      const sql = `
      select u.* from dia_member u join oauth_accounts a on u.pk = a."member_pk"
      where 
      a.provider = $1 
      and 
      a."provider_account_id" = $2`;
      const result = await client.query(sql, [provider, providerAccountId]);
      if (result.rowCount === 0) {
        return null;
      }

      const adapterUser: AdapterUser = {
        id: result.rows[0].pk,
        email: result.rows[0].email,
        email_verified: result.rows[0].email_verified,
        image_url: result.rows[0].image_url,
        name: result.rows[0].nickname,
        username: result.rows[0].github_id,
      };
      return adapterUser;
    },
    //@ts-ignore
    async updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
      const fetchSql = `select * from dia_member where pk = $1`;
      const query1 = await client.query(fetchSql, [user.id]);
      const oldUser = query1.rows[0];

      const newUser = {
        ...oldUser,
        ...user,
      };

      const { pk, nickname, email, email_verified, image_url } = newUser;
      const updateSql = `
        UPDATE dia_member set
        nickname = $2, email = $3, "email_verified" = $4, image_url = $5
        where pk = $1
        RETURNING pk, nickname, email, "email_verified", image_url
      `;
      const query2 = await client.query(updateSql, [
        pk,
        nickname,
        email,
        email_verified,
        image_url,
      ]);
      return query2.rows[0];
    },
    async linkAccount(account) {
      const sql = `
      insert into oauth_accounts 
      (
        member_pk, 
        provider, 
        type, 
        provider_account_id, 
        access_token,
        expires_at,
        refresh_token,
        id_token,
        scope,
        session_state,
        token_type
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      returning
        pk,
        member_pk, 
        provider, 
        type, 
        "provider_account_id", 
        access_token,
        expires_at,
        refresh_token,
        id_token,
        scope,
        session_state,
        token_type
      `;

      const params = [
        account.userId,
        account.provider,
        account.type,
        account.providerAccountId,
        account.access_token,
        account.expires_at,
        account.refresh_token,
        account.id_token,
        account.scope,
        account.session_state,
        account.token_type,
      ];

      const result = await client.query(sql, params);
      return mapExpiresAt(result.rows[0]);
    },
    async createSession({ sessionToken, userId, expires }) {
      if (userId === undefined) {
        throw Error(`member_pk is undef in createSession`);
      }
      const sql = `insert into oauth_sessions ("member_pk", expires, "session_token")
      values ($1, $2, $3)
      RETURNING pk, "session_token", "member_pk", expires`;

      const result = await client.query(sql, [userId, expires, sessionToken]);

      const session: AdapterSession = {
        sessionToken: result.rows[0].session_token,
        userId: result.rows[0].member_pk,
        expires: result.rows[0].expires,
      };
      return session;
    },
    //@ts-ignore
    async getSessionAndUser(sessionToken: any): Promise<{
      session: AdapterSession;
      user: AdapterUser;
    } | null> {
      if (sessionToken === undefined) {
        return null;
      }
      const result1 = await client.query(
        `select * from oauth_sessions where "session_token" = $1`,
        [sessionToken]
      );
      if (result1.rowCount === 0) {
        return null;
      }
      let session: AdapterSession = {
        sessionToken: result1.rows[0].session_token,
        userId: result1.rows[0].member_pk,
        expires: result1.rows[0].expires,
      };

      const result2 = await client.query(
        "select * from dia_member where pk = $1",
        [session.userId]
      );

      if (result2.rowCount === 0) {
        return null;
      }
      const user = result2.rows[0];

      const result3 = await client.query(
        "select * from oauth_accounts where member_pk = $1",
        [session.userId]
      );
      user.access_token = result3.rows[0].access_token;
      return {
        session,
        user,
      };
    },
    async updateSession(
      session: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
    ): Promise<AdapterSession | null | undefined> {
      const { sessionToken } = session;
      const result1 = await client.query(
        `select * from oauth_sessions where "session_token" = $1`,
        [sessionToken]
      );
      if (result1.rowCount === 0) {
        return null;
      }
      const originalSession: AdapterSession = result1.rows[0];

      const newSession: AdapterSession = {
        ...originalSession,
        ...session,
      };
      const sql = `
        UPDATE oauth_sessions set
        expires = $2
        where "session_token" = $1
        `;
      const result = await client.query(sql, [
        newSession.sessionToken,
        newSession.expires,
      ]);
      return result.rows[0];
    },
    async deleteSession(sessionToken) {
      const sql = `delete from oauth_sessions where "session_token" = $1`;
      await client.query(sql, [sessionToken]);
    },
    async unlinkAccount(partialAccount) {
      const { provider, providerAccountId } = partialAccount;
      const sql = `delete from oauth_accounts where "providerAccountId" = $1 and provider = $2`;
      await client.query(sql, [providerAccountId, provider]);
    },
    async deleteUser(member_pk: string) {
      await client.query(`delete from dia_member where pk = $1`, [member_pk]);
      await client.query(`delete from oauth_sessions where "member_pk" = $1`, [
        member_pk,
      ]);
      await client.query(`delete from oauth_accounts where "member_pk" = $1`, [
        member_pk,
      ]);
    },
  };
}
