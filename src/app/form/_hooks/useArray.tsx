import { useFieldArray, useFormContext } from "react-hook-form";

export const useUrlsArray = () => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "urls",
    control: control,
  });
  return { fields, append, control };
};
