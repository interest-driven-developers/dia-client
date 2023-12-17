import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import Login from "./components/Login/page";
export default async function SignInPage() {

  const providers = await getProviders();

  return (
    <>
      {/* <Login providers={providers} /> */}
    </>
  );
}
