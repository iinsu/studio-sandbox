"use client";

import { useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import { useVirtualizer } from "@tanstack/react-virtual";
import { PencilLine } from "lucide-react";
import { Input } from "@/components/ui/input";

const sentences = new Array(100).fill(true).map(() =>
  faker.lorem.sentence({
    min: 20,
    max: 70,
  })
);

export const RowVirtualDynamic = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [subtitle, setSubtitle] = useState(sentences);

  const count = sentences.length;
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });

  const items = virtualizer.getVirtualItems();
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      (document.activeElement as HTMLElement).blur();
    }
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log("blur", event);
  };

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
                  <div className="flex h-full w-full min-w-[30rem] rounded-md border bg-red-200 transition-all duration-300 focus-within:border-primary mb-2">
                    <div className="flex w-14 min-w-[3.5rem] items-center justify-center border-r-2 border-dotted text-center text-xs text-[#64748B]">
                      03:15 <br /> ~ <br /> 04:23
                    </div>

                    <div className="relative group w-full space-y-0">
                      <div className="absolute z-30 hidden h-1/2 w-full group-focus-within:flex" />
                      <label
                        htmlFor={`${virtualRow.key}`}
                        className={` grid h-[55px]  transform items-center rounded-r-md transition-all
                      duration-300 hover:cursor-pointer hover:bg-[#EEF5FF]
                      group-focus-within:-z-10 group-focus-within:h-[115px] group-focus-within:items-start group-focus-within:text-xs`}
                      >
                        <div className="relative flex h-full items-center rounded-r-md border-t bg-violet-200 px-3 hover:bg-[#EEF5FF] group-focus-within:items-start">
                          <div className="flex h-5 items-center group-focus-within:mt-[15px]">
                            <div className="flex max-w-[24rem]">
                              <span className="truncate">
                                {sentences[virtualRow.index]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className="absolute bottom-[30px] left-[40px] hidden group-focus-within:z-10 group-focus-within:flex">
                        <PencilLine className="h-4 w-4 text-[#75A1F4]" />
                      </div>

                      <Input
                        id={`${virtualRow.key}`}
                        defaultValue={sentences[virtualRow.index]}
                        className={`
                        absolute bottom-0 left-6 -z-10 w-[28rem] border-dashed
                        border-[#E2E8F0] bg-[#F8FAFC] pl-11
                        opacity-0 transition-opacity duration-700 ease-in focus:bottom-[22px] focus:z-0 focus:opacity-100
                        `}
                        onBlur={onBlur}
                        onKeyUp={onKeyUp}
                      />
                    </div>
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
