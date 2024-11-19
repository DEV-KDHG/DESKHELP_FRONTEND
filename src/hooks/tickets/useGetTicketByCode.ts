import { useQuery } from "react-query";
import { getTicketByCode } from "../../services/tickets";

export const useGetTicketByCode = (codeTicket: string) => {
  const { data: ticketByCode, isLoading } = useQuery({
    queryKey: ["ticket", codeTicket],

    queryFn: () => getTicketByCode({ codeTicket }),
    refetchInterval: 2000,
  });

  return { ticketByCode, isLoading };
};
