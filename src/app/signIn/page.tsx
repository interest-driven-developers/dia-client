import { getProviders } from "next-auth/react";
import Login from "./components/Login";
export default async function Home() {
  const providers = await getProviders();

  return (
    <>
      {/* <Login providers={providers} /> */}
      <Login  />
    </>
  );
}
