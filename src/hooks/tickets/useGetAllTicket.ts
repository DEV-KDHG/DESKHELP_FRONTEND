import { useQuery } from "@tanstack/react-query";
import { getAllTicket } from "../../services/tickets";

export const useGetAllTicket = () => {
  const { data: ticket, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getAllTicket(),
    refetchInterval: 2000,
  });
  return { ticket, isLoading };
};
