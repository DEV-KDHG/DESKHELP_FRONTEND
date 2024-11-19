import { useQuery } from "react-query";
import { getTicketByCodeIfExist } from "../../services/tickets";
 
export const useGetTicketByCodeInSessionIfExist = (codeTicket: string) => {
  const { data: ticketByCode, isLoading } = useQuery({
    queryKey: ["ticket", codeTicket],

    queryFn: () => getTicketByCodeIfExist({ codeTicket }),
    refetchInterval: 2000,
  });

  return { ticketByCode, isLoading };
};
