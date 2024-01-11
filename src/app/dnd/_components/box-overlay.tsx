import { cn } from "@/lib/utils";
import { UploadCloud } from "lucide-react";

export const BoxOverlay = ({
  type,
  text,
}: {
  type?: string;
  text?: string;
}) => {
  return (
    <div
      className={cn(
        `absolute w-full h-full space-y-2
        flex flex-col items-center justify-center
        bg-slate-400  rounded-md text-white`,
        type === "error" && "bg-red-600",
        type === "success" && "bg-green-600"
      )}
    >
      <span role="img" aria-label="emoji" className="drag-drop-area__icon">
        <UploadCloud />
      </span>
      <span className="text-sm">
        {!!text ? text : "파일을 이곳에 올려놓으세요."}
      </span>
    </div>
  );
};
