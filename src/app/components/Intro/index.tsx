import Image from "next/image";
import Link from "next/link";
import ServiceIntro from "./components/ServiceIntro";
import Tag from "../Tag";
export default function Intro() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-10 lg:w-9/12">
      <section className="flex flex-col items-center justify-center py-24 w-full bg-gray-100  ">
        <h1 className="text-3xl text-neutral-600 font-bold tracking-tighter sm:text-l md:text-4xl lg:text-6xl/none ">
          DIA는{" "}
          <span className="custom-color">
            <ServiceIntro></ServiceIntro>
          </span>
          입니다
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 text-xs md:text-xl ">
          현재 베타 버전으로 모의 면접 기능만을 제공하고 있습니다.
        </p>
        <Link
          className="mt-8 px-4 py-3 text-white bg-primary rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          href="#"
        >
          바로 시작하기
        </Link>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Voice Recognition"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/images/intro/voice-recognition.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Tag>Voice Recognition</Tag>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-2xl">
                  음성인식 기능을 통해 자신의 대답을 확인하세요
                </h2>
                <p className="text-xs/relaxed max-w-[600px] text-gray-500 md:text-xs/relaxed lg:text-sm/relaxed xl:text-base/relaxed ">
                  Web Speech API를 이용하여 음성인식 기능을 구현했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Text-to-Speech"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/images/intro/panic-interviewer.jpeg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Tag>Text-to-Speech</Tag>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-xl md:text-2xl">
                  TTS 기능을 통해 실제 면접과 같은 경험을 해보세요
                </h2>
                <p className="text-xs/relaxed max-w-[600px] text-gray-500 md:text-xs/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
                  실제 면접과 같은 경험을 위해 리얼한 TTS 기능을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Mock Interview"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/images/intro/mockinterview.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Tag>Mock Interview</Tag>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
                  모의 면접 기능을 통해 실전 면접에 대비하세요
                </h2>
                <p className="text-xs/relaxed max-w-[600px] text-gray-500 md:text-xs/relaxed lg:text-sm/relaxed xl:text-base/relaxed">
                  직무별, 테마별 다양한 모의 면접을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
