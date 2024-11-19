import { useQuery } from "@tanstack/react-query";
import { getAllTicketsInProcess } from "../../services/tickets";

export const useGetAllTicketInProcess = () => {
  const { data: ticketInProcces, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getAllTicketsInProcess(),
    refetchInterval: 2000,
  });
  return { ticketInProcces, isLoading };
};
