"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export const Test = () => {
  const methods = useFormContext();

  return (
    <>
      <div>
        <Button
          size="sm"
          onClick={() => {
            console.log("methods", methods);
            methods.resetField("username");
          }}
        >
          Reset
        </Button>
      </div>
    </>
  );
};
