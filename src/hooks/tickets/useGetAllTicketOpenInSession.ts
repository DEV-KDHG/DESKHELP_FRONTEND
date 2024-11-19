import { useQuery } from "@tanstack/react-query";
import { getOpenTicketsInSession } from "../../services/tickets";

export const useGetAllTicketOpenInSession = () => {
  const { isLoading, data: TicketsInSession } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getOpenTicketsInSession(),
    refetchInterval: 2000,
  });
  return { isLoading, TicketsInSession };
};
