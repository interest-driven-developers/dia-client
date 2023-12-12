
import type {
  Adapter,
  AdapterUser,
  VerificationToken,
  AdapterSession,
} from "@auth/core/adapters";
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
      console.log(
        "1==============================================================="
      );

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
      console.log(
        "2==============================================================="
      );

      const sql = `delete from oauth_verification_token
      where identifier = $1 and token = $2
      RETURNING identifier, expires, token `;
      const result = await client.query(sql, [identifier, token]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },

    async createUser(user: Omit<AdapterUser, "pk">) {
      console.log('3==========================', user)
      const { name, email, emailVerified, image } = user;
      const sql = `
        INSERT INTO dia_member (nickname, email, "emailVerified", image) 
        VALUES ($1, $2, $3, $4) 
        RETURNING pk, nickname, email, "emailVerified", image`;
      const result = await client.query(sql, [
        name,
        email,
        emailVerified,
        image,
      ]);
      const adapterUser: AdapterUser = {
        id: result.rows[0].pk,
        email: result.rows[0].email,
        emailVerified: result.rows[0].emailVerified,
      };
      return adapterUser;
    },
    async getUser(pk) {
      console.log(
        "4=============================================================== "
       , pk);

      const sql = `select * from dia_member where pk = $1`;
      try {
        const result = await client.query(sql, [pk]);
        return result.rowCount === 0 ? null : result.rows[0];
      } catch (e) {
        return null;
      }
    },
    async getUserByEmail(email) {
      console.log(
        "5==============================================================="
      , email);

      const sql = `select * from dia_member where email = $1`;
      const result = await client.query(sql, [email]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },
    async getUserByAccount({
      providerAccountId,
      provider,
    }): Promise<AdapterUser | null> {
      console.log(
        "6==============================================================="
      , providerAccountId, provider);

      const sql = `
          select u.* from dia_member u join oauth_accounts a on u.pk = a."memberPk"
          where 
          a.provider = $1 
          and 
          a."providerAccountId" = $2`;
      const result = await client.query(sql, [provider, providerAccountId]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },
    async updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
      console.log(
        "7==============================================================="
      );

      const fetchSql = `select * from dia_member where pk = $1`;
      const query1 = await client.query(fetchSql, [user.id]);
      const oldUser = query1.rows[0];

      const newUser = {
        ...oldUser,
        ...user,
      };

      const { pk, nickname, email, emailVerified, image } = newUser;
      const updateSql = `
        UPDATE dia_member set
        nickname = $2, email = $3, "emailVerified" = $4, image = $5
        where pk = $1
        RETURNING pk, nickname, email, "emailVerified", image
      `;
      const query2 = await client.query(updateSql, [
        pk,
        nickname,
        email,
        emailVerified,
        image,
      ]);
      return query2.rows[0];
    },
    async linkAccount(account) {
      console.log("============================account:", account);
      const sql = `
      insert into oauth_accounts 
      (
        "memberPk", 
        provider, 
        type, 
        "providerAccountId", 
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
        "memberPk", 
        provider, 
        type, 
        "providerAccountId", 
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
      console.log("=====여긴 세션입니다 : ", sessionToken, userId, expires);
      if (userId === undefined) {
        throw Error(`memberPk is undef in createSession`);
      }
      const sql = `insert into oauth_sessions ("memberPk", expires, "sessionToken")
      values ($1, $2, $3)
      RETURNING pk, "sessionToken", "memberPk", expires`;

      const result = await client.query(sql, [userId, expires, sessionToken]);
      return result.rows[0];
    },

    async getSessionAndUser(sessionToken: string | undefined): Promise<{
      session: AdapterSession;
      user: AdapterUser;
    } | null> {
      console.log(
        "8==============================================================="
      );

      if (sessionToken === undefined) {
        return null;
      }
      const result1 = await client.query(
        `select * from oauth_sessions where "sessionToken" = $1`,
        [sessionToken]
      );
      if (result1.rowCount === 0) {
        return null;
      }
      let session: AdapterSession = result1.rows[0];

      const result2 = await client.query(
        "select * from dia_member where pk = $1",
        [session.userId]
      );
      if (result2.rowCount === 0) {
        return null;
      }
      const user = result2.rows[0];
      return {
        session,
        user,
      };
    },
    async updateSession(
      session: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
    ): Promise<AdapterSession | null | undefined> {
      console.log(
        "9==============================================================="
      );

      const { sessionToken } = session;
      const result1 = await client.query(
        `select * from oauth_sessions where "sessionToken" = $1`,
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
        where "sessionToken" = $1
        `;
      const result = await client.query(sql, [
        newSession.sessionToken,
        newSession.expires,
      ]);
      return result.rows[0];
    },
    async deleteSession(sessionToken) {
      console.log(
        "deleteSession==============================================================="
      );

      const sql = `delete from oauth_sessions where "sessionToken" = $1`;
      await client.query(sql, [sessionToken]);
    },
    async unlinkAccount(partialAccount) {
      console.log(
        "unlinkAccount==============================================================="
      );
      const { provider, providerAccountId } = partialAccount;
      const sql = `delete from oauth_accounts where "providerAccountId" = $1 and provider = $2`;
      await client.query(sql, [providerAccountId, provider]);
    },
    async deleteUser(memberPk: string) {
      console.log(
        "deleteUser==============================================================="
      );
      await client.query(`delete from dia_member where pk = $1`, [memberPk]);
      await client.query(`delete from oauth_sessions where "memberPk" = $1`, [
        memberPk,
      ]);
      await client.query(`delete from oauth_accounts where "memberPk" = $1`, [
        memberPk,
      ]);
    },
  };
}
