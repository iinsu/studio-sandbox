import { FilesDragAndDrop } from "./_components/drag-n-drop";

const DragAndDropPage = () => {
  const onUpload = (files: File) => {
    console.log(files);
  };

  return (
    <>
      <div>
        <FilesDragAndDrop onUpload={onUpload} />
      </div>
    </>
  );
};

export default DragAndDropPage;
