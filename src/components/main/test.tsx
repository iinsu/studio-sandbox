"use client";

import _ from "lodash";

export const MainComponent = (props: URLSearchParams) => {
  console.log("proop", props);
  console.log("empty", _.isEmpty(props));
  return (
    <>
      <div>Main</div>
    </>
  );
};
