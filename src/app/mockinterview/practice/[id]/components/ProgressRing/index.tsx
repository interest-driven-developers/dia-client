import React, { useEffect, useState } from "react";

type Props = {
  radius: number;
  stroke: number;
  progress: number;
};

export const ProgressRing = ({ radius, stroke, progress }: Props) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference); // 초기값을 circumference로 설정하여 링이 비어 있음
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min(progress, elapsedTime / 1000);
      // 꽉 찬 링에서 시작하여 색이 사라지는 방식을 유지하며 시계 방향으로 진행하도록 수정
      const newStrokeDashoffset =
        circumference - (1 - currentProgress / progress) * circumference;

      setStrokeDashoffset(newStrokeDashoffset);
      setAnimationProgress(currentProgress);

      if (currentProgress < progress) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress(); // 애니메이션 시작

    return () => cancelAnimationFrame(animationFrameId);
  }, [radius, stroke, progress]); // 의존성 배열에 radius와 stroke를 직접 포함

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="transform rotate-[270deg] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <circle
        stroke="#7C4DFF"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};
