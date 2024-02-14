import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import pgAdapter from "../../../../../lib/adapter/pgAdapter";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.AWS_RDS_URI,
  user: process.env.AWS_RDS_USER,
  database: process.env.AWS_RDS_DB,
  password: process.env.AWS_RDS_PASSWORD,
  port: 5432, // RDS 기본 포트
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: false,
  },
});
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: pgAdapter(pool),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image_url: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET as string,
    maxAge: 30, // 30 days
  },

  callbacks: {
    async session({ session, token, user }: any) {
      session.user = user;
      return session as any;
    },

    async jwt({ token, user, account, trigger }: any) {
      if (user) {
        token.user = user;
        token.user.name = account.name;
        token.user.email = account.email;
        token.user.role = account.role;
        token.access_Token = account.access_token;
      }
      return token as any;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
