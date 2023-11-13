import React from "react";
import Image from "next/image";
export default function Home() {
  const title = "DIA (Developer Interview Assistant)";
  const description = "DIA는 개발자 면접 도우미 입니다.";

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      {/* 텍스트를 가운데로 정렬 */}
      <span className="text-3xl text-center custom-color font-mono">{title}</span>
      <p className="mt-4">{description}</p>

      {/* 이미지 추가 예시 */}
      <div className="mt-8 flex justify-center">
        <img
          src="이미지1의 URL"
          alt="이미지1 설명"
          className="mr-4"
          width={200}
          height={200}
        />
        <img
          src="이미지2의 URL"
          alt="이미지2 설명"
          className="mr-4"
          width={200}
          height={200}
        />
        <img src="이미지3의 URL" alt="이미지3 설명" width={200} height={200} />
      </div>
    </main>
  );
}
