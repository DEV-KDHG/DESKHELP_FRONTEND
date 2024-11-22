import { useQuery } from "@tanstack/react-query";
import { getTicketClosedInSession } from "../../services/tickets";

export const useGetAllTicketsClosedInSession = () => {
  const { data: ticketClosed, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getTicketClosedInSession(),
    refetchInterval: 2000,
  });

  return { ticketClosed, isLoading };
};
