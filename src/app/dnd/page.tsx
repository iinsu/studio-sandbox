"use client";

import { FileDropBox } from "./_components/drop-box";
import { DragAndDropArea } from "./_components/upload-area";

const DragAndDropPage = () => {
  const onUpload = (files: File) => {
    console.log(files);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center pt-8 bg-slate-100">
        <FileDropBox onUpload={onUpload} count={2}>
          <FilesDragAndDrop />
        </FileDropBox>
      </div>
    </>
  );
};

export default DragAndDropPage;
