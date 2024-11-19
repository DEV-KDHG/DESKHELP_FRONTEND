import { useQuery } from "@tanstack/react-query";
import { getAllTicketsInProcessInSession } from "../../services/tickets";

export const useGetAllTicketInProcessInSession = () => {
  const { data: ticketProccesInSession, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getAllTicketsInProcessInSession(),
    refetchInterval: 2000,
  });

  return { ticketProccesInSession, isLoading };
};
