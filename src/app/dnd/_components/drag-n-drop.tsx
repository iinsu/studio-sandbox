"use client";

import { useEffect, useRef } from "react";
import { UploadCloud } from "lucide-react";

export const FilesDragAndDrop = ({ onUpload }: any) => {
  const drop = useRef<HTMLDivElement>(null);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const result = event.dataTransfer;
    if (result?.files && result.files.length) {
      onUpload(result.files);
    }
  };

  useEffect(() => {
    drop.current?.addEventListener("dragover", handleDragOver);
    drop.current?.addEventListener("drop", handleDrop);

    return () => {
      drop.current?.removeEventListener("dragover", handleDragOver);
      drop.current?.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <>
      <div className="drag-drop-area space-y-2" ref={drop}>
        <span role="img" aria-label="emoji" className="drag-drop-area__icon">
          <UploadCloud />
        </span>
        <span className="text-sm">파일을 이곳에 올려놓으세요.</span>
      </div>
    </>
  );
};
