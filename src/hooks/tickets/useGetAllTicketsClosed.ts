import { useQuery } from "react-query";
import { getTicketClosed } from "../../services/tickets";

export const useGetAllTicketsClosed = () => {
  const { data: ticketClosed, isLoading } = useQuery({
    queryKey: ["ticket"],
    queryFn: () => getTicketClosed(),
    refetchInterval: 2000,
  });

  return { ticketClosed, isLoading };
};
