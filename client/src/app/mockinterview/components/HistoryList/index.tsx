"use client";
import React, { useState } from "react";
import HistoryContainer from "./components/HistoryContainer";
import HistoryModal from "./components/HistoryModal";
import { HistoryType } from "@/types/History";
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
  const [historyList, setHistoryList] = useState(dummmyData);
  const [thisHistory, setThisHistory] = useState<HistoryType | null>(null);
  const [isViewHistoryModal, setIsViewHistoryModal] = useState(false);
  const handleHistoryModal = (id: number) => {
    const history = historyList.find((data) => data.id === id);
    setThisHistory(history || null);
    setIsViewHistoryModal(true);
  };
    const handleCloseHistoryModal = () => {
    setIsViewHistoryModal(false);
  };
  return (
    <div className="grid gap-2 w-full mt-2 bg-white rounded-lg shadow-md divide-y border-dashed border-2 border-indigo-500">
      {historyList.map((data) => (
        <HistoryContainer
          key={data.id}
          id={data.id}
          title={data.title}
          description={data.description}
          date={data.date}
          handleHistoryModal={handleHistoryModal}
        ></HistoryContainer>
      ))}
      {/* 히스토리 모달 */}
      {isViewHistoryModal && (
        <HistoryModal
          title={thisHistory!.title}
          description={thisHistory!.description}
          date={thisHistory!.date}
          handleCloseHistoryModal={handleCloseHistoryModal}
        ></HistoryModal>
      )}
    </div>
  );
}
