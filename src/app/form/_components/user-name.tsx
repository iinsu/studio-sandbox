import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SampleFormValues } from "../page";

export const UserNameField = ({
  form,
}: {
  form: UseFormReturn<SampleFormValues, any, undefined>;
}) => {
  return (
    <>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
