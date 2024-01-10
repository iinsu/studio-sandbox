"use client";

import { FileDropBox } from "./_components/drop-box";
import { UploadForm } from "./_components/upload-form";

const DragAndDropPage = () => {
  const onUpload = (files: File) => {
    console.log(files);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center pt-8 bg-slate-100">
        <UploadForm onUpload={onUpload} count={2}>
          <FileDropBox />
        </UploadForm>
      </div>
    </>
  );
};

export default DragAndDropPage;
