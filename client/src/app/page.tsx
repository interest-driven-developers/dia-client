import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const title = "DIA (Developer Interview Assistant)";
  const description =
    "DIA는 개발자 면접 도우미 입니다. 취업,이직을 위한 코딩테스트 앱은 많지만 면접 준비를 위한 앱은 없다는 것에서 시작했습니다. 개발자들이 좀더 실전적인 면접 연습을 할수 있게 돕는것이 목표입니다";
  let session = await getServerSession(authOptions);
  console.log(session)
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-y-7 max-w-3xl mx-auto">
      {/* 텍스트를 가운데로 정렬 */}
      <span className="text-3xl text-center custom-color font-mono">
        {title}
      </span>
      <p className="mt-5">{description}</p>

      {/* 이미지 추가 예시 */}
      <div className="mt-10 gap-12 flex justify-center">
        <div>
          <Image
            src="/images/interview.png"
            alt="인터뷰 이미지"
            className="mr-5 opacity-70"
            width={250}
            height={250}
          />
          <p className="text-mg mt-2 flex justify-center text-slate-500">
            모의 인터뷰 기능
          </p>
        </div>
        <div>
          <Image
            src="/images/speak.png"
            alt="TTS"
            className="mr-5 opacity-70"
            width={250}
            height={250}
          />
          <p className="text-mg mt-2 flex justify-center text-slate-500">
            TTS 기능{" "}
          </p>
        </div>
        <div>
          <Image
            src="/images/text-format.png"
            alt="스크립트 수정"
            className="mr-5 opacity-70"
            width={250}
            height={250}
          />
          <p className="text-mg mt-2 flex justify-center text-slate-500">
            스크립트 수정{" "}
          </p>
        </div>
      </div>
      <div className="mt-2 gap-y-2">
        <Link href={`/mockinterview/`}>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none">
            개발자들이 선별한 모의 면접 보러가기 🧑🏻‍💻
          </button>
        </Link>
        <Link href={`/solve/`}>
          <button className="mt-2 w-full bg-emerald-500 text-white py-2 px-4 rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none">
            질문에 해당하는 스크립트 작성하기 ✏️
          </button>
        </Link>
      </div>
    </main>
  );
}
