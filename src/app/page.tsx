import { authOptions } from "./api/auth/[...nextauth]/route";
import Intro from "./components/Intro";

export default async function Home() {
  // let session = await getServerSession(authOptions);
  return (
    <main className="flex flex-col justify-center mx-auto items-center sm:px-6 py-16 sm:w-1/2">
      <Intro />
    </main>
  );
}
