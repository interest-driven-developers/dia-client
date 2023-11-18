"use client";

import HistoryContainer from "./components/HistoryContainer";

const dummmyData = [
  {
    id: 1,
    title: "Solid 원칙에 대해 설명해보세요",
    description:
      "객체지향 설계에서 지켜줘야 할 5개의 소프트웨어 개발 원칙( SRP, OCP, LSP, ISP, DIP )을 말한다.",
    date: "2023-11-18 12:00:00",
    score: 80,
  },
  {
    id: 2,
    title: "Solid 원칙에 대해 설명해보세요",
    description: ".. 몰루.",
    date: "2023-11-19 13:00:00",
    score: 0,
  },
];
export default function HistoryList() {
  return (
    <div className="grid gap-2 w-full mt-2">
      {dummmyData.map((data) => (
        <HistoryContainer
          key={data.id}
          title={data.title}
          description={data.description}
          date={data.date}
        ></HistoryContainer>
      ))}
    </div>
  );
}
