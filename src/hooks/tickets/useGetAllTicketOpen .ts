import { useQuery } from "@tanstack/react-query";
import { getAllOpenTickets } from "../../services/tickets";

export const useGetAllTicketOpen  = () => {
  const { data: ticketOpen, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getAllOpenTickets(),
    refetchInterval: 2000,
  });
  return { ticketOpen, isLoading };
};
