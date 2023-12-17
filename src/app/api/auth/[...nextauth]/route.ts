import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import pgAdapter from "../../../../../lib/adapter/pgAdapter";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.AWS_RDS_URI,
  user: "front",
  database: "dia_poc",
  password: "1q2w3e4r!@",
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
  adapter: pgAdapter(pool),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as any,
    maxAge: 30 * 24 * 60 * 60, //30일
  },
  jwt: {
    maxAge: 60,
  },
  // pages: {
  //   signIn: "/signIn",
  // },
  callbacks: {
    async session({ session, token }: any) {
      // console.log("auth session : ", session, token);
      session.user.id = token.user.id;
      session.token = token;
      // session.user = token as any;
      return session as any;
    },

    async jwt({ token, account, profile,user }: any) {
      // console.log("auth jwt : ", token, account, profile);

      if (account) {
        token.user = user;
        token.user.name = account.name;
        token.user.email = account.email;
        token.user.role = account.role;
        token.accessToken = account.access_token;
      }
      return token as any;
      // return {...token, ...user }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
