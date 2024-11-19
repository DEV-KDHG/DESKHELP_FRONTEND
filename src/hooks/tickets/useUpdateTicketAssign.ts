import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignTicketToUser } from "../../services/tickets";

export const useUpdateTicketAssing = () => {
  const queryClient = useQueryClient();
  const { mutate: UpdateTicketAssing, isPending } = useMutation({
    mutationFn: assignTicketToUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ticket"] });
    },
  });
  return { UpdateTicketAssing, isPending };
};
