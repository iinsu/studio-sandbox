import { UploadCloud } from "lucide-react";

export const DraggingBox = () => {
  return (
    <>
      <div
        className={`
        absolute w-full h-full space-y-2
        flex flex-col items-center justify-center
        bg-slate-400  rounded-md text-white
        `}
      >
        <span role="img" aria-label="emoji" className="drag-drop-area__icon">
          <UploadCloud />
        </span>
        <span className="text-sm">파일을 이곳에 올려놓으세요.</span>
      </div>
    </>
  );
};
