import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatusTicketsBycode } from "../../services/tickets";

export const useUpdateStatusTicketByCode = () => {
  const queryClient = useQueryClient();
  const { mutate: UpdateTicketByStatus, isPending } = useMutation({
    mutationFn:updateStatusTicketsBycode,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["ticket"]})
    }
  });
  return{ UpdateTicketByStatus,isPending};
};
