"use client";

import _ from "lodash";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export const MainComponent = () => {
  const searchParams = useSearchParams();
  console.log("useSearchParams", searchParams.get("test"));

  return (
    <>
      <div>Main</div>
    </>
  );
};
