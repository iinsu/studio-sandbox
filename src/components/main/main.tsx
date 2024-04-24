"use client";

import _ from "lodash";
import { useEffect, useState } from "react";
import { TestComponent } from "./test";

export const MainComponent = (props: URLSearchParams) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted === false) return <></>;

  return (
    <>
      <TestComponent {...props} />
    </>
  );
};
