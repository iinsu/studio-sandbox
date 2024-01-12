import { Button } from "@/components/ui/button";
import { useUrlsArray } from "../_hooks/useArray";

export const TestButton = () => {
  const { append } = useUrlsArray();

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => {
          console.log("Add Value");
          append({ value: "" }, { shouldFocus: false });
        }}
      >
        Add URL
      </Button>
    </>
  );
};
