"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  const onSubmit = (data: SampleFormValues) => {
    console.log("submit", data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <UserNameField form={form} />
          <div className="bg-red-100 p-1 w-[500px] h-[300px] overflow-auto">
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`urls.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      dd links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="flex space-x-2 mt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ value: "" })}
            >
              Add URL
            </Button>
            <Button type="submit" size="sm">
              Update
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default HookForm;
