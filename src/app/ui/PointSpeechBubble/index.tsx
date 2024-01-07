type PointSpeechBubbleProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function PointSpeechBubble({
  className,
  children,
}: PointSpeechBubbleProps) {
  return (
    <div className="w-full leading-1.5 p-4 bg-indigo-100 text-indigo-800 rounded-e-xl rounded-es-xl">
      {/* <div className="p-4 w-full  rounded-md shadow-sm divide-y  "> */}

      <p className="text-base font-bold ">{children}</p>
    </div>
  );
}
