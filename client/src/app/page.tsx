import React from "react";
import Image from "next/image";
import InterviewImage from "../../public/images/interview.png";
import SpeakImage from "../../public/images/speak.png";
import textFormatImage from "../../public/images/text-format.png";
export default function Home() {
  const title = "DIA (Developer Interview Assistant)";
  const description =
    "DIA는 개발자 면접 도우미 입니다. 취업,이직을 위한 코딩테스트 앱은 많지만 면접 준비를 위한 앱은 없다는 것에서 시작했습니다. 개발자들이 좀더 실전적인 면접 연습을 할수 있게 돕는것이 목표입니다";

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-y-7">
      {/* 텍스트를 가운데로 정렬 */}
      <span className="text-3xl text-center custom-color font-mono">
        {title}
      </span>
      <p className="mt-8">{description}</p>

      {/* 이미지 추가 예시 */}
      <div className="mt-10 gap-12 flex justify-center">
        <div>
          <Image
            src="/images/interview.png"
            alt="인터뷰 이미지"
            className="mr-5"
            width={250}
            height={250}
          />
          <p className="text-lg mt-2 flex justify-center">모의 인터뷰 기능 </p>
        </div>
        <div>
          <Image
            src="/images/speak.png"
            alt="TTS"
            className="mr-5"
            width={250}
            height={250}
          />
          <p className="text-lg mt-2 flex justify-center">TTS 기능 </p>
        </div>
        <div>
          <Image
            src="/images/text-format.png"
            alt="스크립트 수정"
            className="mr-5"
            width={250}
            height={250}
          />
          <p className="text-lg mt-2 flex justify-center">스크립트 수정 </p>
        </div>
      </div>
    </main>
  );
}
