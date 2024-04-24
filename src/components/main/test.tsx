"use client";

import _ from "lodash";
import { useSearchParams } from "next/navigation";

export const TestComponent = () => {
  const searchParams = useSearchParams();
  console.log("useSearchParams", searchParams.get("test"));
  return (
    <>
      <div>Main</div>
    </>
  );
};
