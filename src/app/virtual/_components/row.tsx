"use client";

import { useRef } from "react";
import { faker } from "@faker-js/faker";
import { useVirtualizer } from "@tanstack/react-virtual";

const sentences = new Array(4).fill(true).map(() =>
  faker.lorem.sentence({
    min: 20,
    max: 70,
  })
);

export const RowVirtualDynamic = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const count = sentences.length;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <>
      <div>
        <div
          ref={parentRef}
          className="border max-w-full h-[550px] overflow-y-auto"
          style={{
            contain: "strict",
          }}
        >
          <div
            className="w-full relative"
            style={{
              height: virtualizer.getTotalSize(),
            }}
          >
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${items[0]?.start ?? 0}px)`,
              }}
            >
              {items.map((virtualRow) => (
                <div
                  key={virtualRow.key}
                  ref={virtualizer.measureElement}
                  data-index={virtualRow.index}
                >
                  <div className="py-2">
                    <div>Row {virtualRow.index}</div>
                    <div>{sentences[virtualRow.index]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
