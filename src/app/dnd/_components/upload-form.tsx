"use client";

import { useEffect, useRef, useState } from "react";
import { DraggingBox } from "./dragging-box";

export const UploadForm = ({ onUpload, children, count = 1, formats }: any) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const result = event.dataTransfer;

    // 값이 NULL 일 경우 처리
    if (result === null) return;

    // Props 로 넘어온 Count 보다 등록하려는 파일 개수가 많을 때 처리
    if (count < result.files.length) {
      console.log(`파일 업로드는 ${count}개만 가능합니다.`);
      return;
    }

    // formats 값이 없을 경우
    if (!!formats === false) return;

    const files = [...result.files];
    // 파일의 형식과 포맷이 다른지 확인
    const filesFormatCheck = files.some(
      (file) =>
        !formats.some((format: string) =>
          file.name.toLowerCase().endsWith(format.toLowerCase())
        )
    );

    // 파일이 업로드 가능한 확장자가 아닌경우
    if (filesFormatCheck) {
      console.log(`업로드 가능한 확장자는 ${formats.join(", ")} 입니다.`);
      return;
    }

    onUpload(result.files);
  };

  const handleDragEnter = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target !== dragRef.current) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.target === dragRef.current) {
      setIsDragging(false);
    }
  };

  useEffect(() => {
    dropRef.current?.addEventListener("dragover", handleDragOver);
    dropRef.current?.addEventListener("drop", handleDrop);
    dropRef.current?.addEventListener("dragenter", handleDragEnter);
    dropRef.current?.addEventListener("dragleave", handleDragLeave);

    return () => {
      dropRef.current?.removeEventListener("dragover", handleDragOver);
      dropRef.current?.removeEventListener("drop", handleDrop);
      dropRef.current?.removeEventListener("dragenter", handleDragEnter);
      dropRef.current?.removeEventListener("dragleave", handleDragLeave);
    };
  }, []);

  return (
    <>
      <div ref={dropRef} className="relative w-[300px] h-[200px] flex">
        {isDragging && (
          <div ref={dragRef}>
            <DraggingBox />
          </div>
        )}
        {children}
      </div>
    </>
  );
};
