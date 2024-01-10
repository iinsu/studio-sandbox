"use client";

import { useEffect, useRef } from "react";

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
      <div className="drag-drop-area" ref={drop}>
        Hey, drop me some files
        <span role="img" aria-label="emoji" className="drag-drop-area__icon">
          &#128526;
        </span>
      </div>
    </>
  );
};
