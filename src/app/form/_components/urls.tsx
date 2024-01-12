"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUrlsArray } from "../_hooks/useArray";

export const UrlsFieldArray = () => {
  const { fields, control } = useUrlsArray();

  return (
    <>
      {fields.map((field, index) => (
        <FormField
          control={control}
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
    </>
  );
};
