"use client";

import { useEffect, useRef } from "react";

export const DragAndDropArea = ({ onUpload, children }: any) => {
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
      <div ref={drop}>{children}</div>
    </>
  );
};
