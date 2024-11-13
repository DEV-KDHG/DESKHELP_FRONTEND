import { useQuery } from "@tanstack/react-query";
import { GetAllInactiveStatus } from "../../services/status";

export const useGetAllInactiveStatus = () => {
  const { isLoading, data: statusInactives } = useQuery({
    queryKey: ["statusInactives"],
    queryFn: () => GetAllInactiveStatus(),
  });

  return { isLoading, statusInactives };
};
