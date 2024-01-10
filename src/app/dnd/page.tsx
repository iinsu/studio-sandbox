"use client";

import { FilesDragAndDrop } from "./_components/drag-n-drop";

const DragAndDropPage = () => {
  const onUpload = (files: File) => {
    console.log(files);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center pt-8 bg-slate-100">
        <FilesDragAndDrop onUpload={onUpload} />
      </div>
    </>
  );
};

export default DragAndDropPage;
