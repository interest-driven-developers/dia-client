import React from "react";
import Image from "next/image";
import Link from "next/link";
  const scriptData = [
    {
      id: 1,
      title: "Solid 원칙에 대해 설명해보세요",
      description:
        "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
    },
    {
      id: 2,
      title: "프로세스와 스레드의 차이에 대해 설명해 보세요.",
      description:
        "프로세스는 자원을 할당받는 작업의 단위이며, 스레드는 프로세스가 할당받은 자원을 이용하는 실행의 단위. 스레드는 자원을 공유한다는 점이 차이점이 있습니다.",
    },
    {
      id: 3,
      title: "Solid 원칙에 대해 설명해보세요",
      description:
        "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
    },
    {
      id: 4,
      title: "프로세스와 스레드의 차이에 대해 설명해 보세요.",
      description:
        "프로세스는 자원을 할당받는 작업의 단위이며, 스레드는 프로세스가 할당받은 자원을 이용하는 실행의 단위. 스레드는 자원을 공유한다는 점이 차이점이 있습니다.",
    },
  ];
export default function Home() {


  return (
    <main className="h-screen  max-w-3xl mx-auto">
      <h1 className="text-3xl font-sans mt-3 mb-3">스크립트 별 모의 면접</h1>
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          총 {scriptData.length}개의 스크립트가 있습니다.
        </p>
      </div>
      <div className="grid gap-2">
        {scriptData.map((script) => (
          <div key={script.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link href={`/mockinterview/${script.id}`} className="text-gray-500">{`Q${script.id}: ${script.title}`} </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
