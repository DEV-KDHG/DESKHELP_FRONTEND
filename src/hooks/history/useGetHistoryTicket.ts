import { useQuery } from "@tanstack/react-query";
import { getHistoryAllByCode } from "../../services/history";

export const useGetHistoryTicketByCode = () => {
  const { data: ticketGetHistory, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => getHistoryAllByCode,
  });

  return { ticketGetHistory, isLoading };
};
