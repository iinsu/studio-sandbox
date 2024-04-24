"use client";

import _ from "lodash";
import { useSearchParams } from "next/navigation";

export const TestComponent = (props: URLSearchParams) => {
  const searchParams = useSearchParams();
  console.log("proop", props);
  console.log("empty", _.isEmpty(props));
  console.log("useSearchParams", searchParams.get("test"));
  return (
    <>
      <div>Main</div>
    </>
  );
};
