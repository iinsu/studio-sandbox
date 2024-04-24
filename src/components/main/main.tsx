"use client";

import _ from "lodash";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { TestComponent } from "./test";

export const MainComponent = () => {
  const searchParams = useSearchParams();
  const test = searchParams.get("test");
  const id = searchParams.get("id");
  const [value, setValue] = useLocalStorage(
    "info",
    {},
    { serializer: (value) => JSON.stringify(value) }
  );
  console.log("useSearchParams", searchParams.get("test"));

  useEffect(() => {
    if (test !== null && id !== null) {
      setValue({ test, id });
    }
  }, [test, id, setValue]);

  if (test === null) return <div>NULL</div>;

  return (
    <>
      <TestComponent />
    </>
  );
};
