
export default function Main({ params }: { params: { id: string } }) {
  return (
    <main className="">
      test:{params.id}
    </main>
  );
}
