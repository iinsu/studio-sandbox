"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useFieldArray, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { UserNameField } from "./_components/user-name";
import { Test } from "./_components/test";
import { TestInput } from "./_components/test-input";
import { UrlsFieldArray } from "./_components/urls";
import { TestButton } from "./_components/test-button";

const sampleFormSchema = z.object({
  username: z.string(),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid URL." }),
    })
  ),
});

export type SampleFormValues = z.infer<typeof sampleFormSchema>;

const defaultValues: Partial<SampleFormValues> = {
  username: "Sample",
  urls: [
    {
      value: "https://sample1.com",
    },
    {
      value: "https://smaple2.com",
    },
  ],
};

const HookForm = () => {
  const form = useForm<SampleFormValues>({
    resolver: zodResolver(sampleFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: SampleFormValues) => {
    console.log("submit", data);
  };

  return (
    <>
      <Form {...form}>
        <TestInput />
        <Test />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <UserNameField form={form} />
          <div className="bg-red-100 p-1 w-[500px] h-[300px] overflow-auto">
            <UrlsFieldArray />
          </div>
          <div className="flex space-x-2 mt-2">
            <TestButton />
            <Button type="submit" size="sm">
              Update
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => console.log("Watch")}
            >
              Watch
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default HookForm;
