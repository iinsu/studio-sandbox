"use client";

import { Input } from "@/components/ui/input";
import { useController } from "react-hook-form";

export const TestInput = () => {
  const { field } = useController({ name: "username" });
  return (
    <>
      <Input {...field} />
    </>
  );
};
