import { UploadCloud } from "lucide-react";

export const FilesDragAndDrop = () => {
  return (
    <>
      <div className="drag-drop-area space-y-2">
        <span role="img" aria-label="emoji" className="drag-drop-area__icon">
          <UploadCloud />
        </span>
        <span className="text-sm">파일을 이곳에 올려놓으세요.</span>
      </div>
    </>
  );
};
