import React, { useRef, useEffect } from "react";
type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function OverlayClickHandler({ children, onClick }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !(wrapperRef.current as HTMLElement).contains(e.target as Node)
      ) {
        onClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, onClick]);

  return <div ref={wrapperRef}>{children}</div>;
}
