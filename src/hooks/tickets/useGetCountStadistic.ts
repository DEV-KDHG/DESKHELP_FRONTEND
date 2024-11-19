import { useQuery } from "@tanstack/react-query";
import { getCountStadic } from "../../services/tickets";

export const useGetCountStadistic = (startDate: string, endDate: string) => {
  const { data: countStadistic, isLoading } = useQuery({
    queryKey: ["ticket", startDate, endDate],
    queryFn: () => getCountStadic({ startDate, endDate }),
    refetchInterval: 2000,
  });

  return { countStadistic, isLoading };
};
