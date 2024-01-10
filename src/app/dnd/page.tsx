"use client";

import { FilesDragAndDrop } from "./_components/drag-n-drop";
import { DragAndDropArea } from "./_components/upload-area";

const DragAndDropPage = () => {
  const onUpload = (files: File) => {
    console.log(files);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center pt-8 bg-slate-100">
        <DragAndDropArea onUpload={onUpload} count={2}>
          <FilesDragAndDrop />
        </DragAndDropArea>
      </div>
    </>
  );
};

export default DragAndDropPage;
