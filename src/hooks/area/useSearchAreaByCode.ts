import { useQuery } from "@tanstack/react-query";
import { searchAreaByCode } from "../../services/area";

export const useSearchAreaByCode = (code: string) => {
  const { isLoading, data: area } = useQuery({
    queryKey: ["areas", code],
    queryFn: () => searchAreaByCode(code),
    enabled:code.length>0
  });

  return { isLoading, area };
};
