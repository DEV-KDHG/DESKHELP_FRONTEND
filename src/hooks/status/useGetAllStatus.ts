import { useQuery } from "@tanstack/react-query";
import { GetAllStatus } from "../../services/status";

export const useGetAllStatus = () => {
  const { isLoading, data: status } = useQuery({
    queryKey: ["status"],
    queryFn: () => GetAllStatus(),
  });

  return { isLoading, status };
};
