import React, { useEffect, useState } from "react";

type Props = {
  radius: number;
  stroke: number;
  progress: number;
};

export const ProgressRing = ({ radius, stroke, progress }: Props) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId: number;

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min(progress, elapsedTime / 1000);
      const newStrokeDashoffset =
        circumference - (currentProgress / progress) * circumference;

      setStrokeDashoffset(newStrokeDashoffset);
      setAnimationProgress(currentProgress);

      if (currentProgress >= progress) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [progress, circumference]);

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      className="transform rotate-[-90deg] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <circle
        stroke="#ddd"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        className="stroke-[#7C4DFF]"
      />
    </svg>
  );
};
