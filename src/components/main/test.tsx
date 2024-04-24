"use client";

import { useInfo } from "./useInfo";

export const TestComponent = () => {
  const info = useInfo();
  console.log(info);
  return (
    <>
      <div>{info?.id}</div>
    </>
  );
};
