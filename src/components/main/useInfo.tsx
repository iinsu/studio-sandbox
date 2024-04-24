import { useLocalStorage } from "usehooks-ts";

export const useInfo = () => {
  const [info] = useLocalStorage(
    "info",
    {},
    {
      deserializer: (value) => JSON.parse(value),
    }
  );

  if (info === "") return null;
  return info;
};
