import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTicket } from "../../services/tickets";

export const useCreateTicket = () => {
  const queryClient = useQueryClient();

  const { mutate: CrateTicketMutation, isPending,reset } = useMutation({
    mutationFn: saveTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ticket"] });
    },
  });
  return { CrateTicketMutation, isPending,reset  };
};
