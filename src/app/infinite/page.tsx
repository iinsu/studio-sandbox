"use client";

import { useEffect, useState } from "react";

const fetchHello = async () => {
  const hello = await fetch("/api/hello");
  const result = await hello.json();
  return result;
};

const VirtualInfinite = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    (async () => {
      const hello = await fetchHello();
      setValue(hello);
    })();
  }, []);

  console.log("hello", value);

  return (
    <>
      <div> Virtual Infinite</div>
    </>
  );
};

export default VirtualInfinite;
