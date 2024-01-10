"use client";

import { useEffect, useRef } from "react";

export const DragAndDropArea = ({ onUpload, children, count = 1 }: any) => {
  const drop = useRef<HTMLDivElement>(null);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const result = event.dataTransfer;

    // 값이 NULL 일 경우 처리
    if (result === null) return;

    // Props 로 넘어온 Count 보다 등록하려는 파일 개수가 많을 때 처리
    if (count < result.files.length) {
      console.log(`파일 업로드는 ${count}개만 가능합니다.`);
      return;
    }

    onUpload(result.files);
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
