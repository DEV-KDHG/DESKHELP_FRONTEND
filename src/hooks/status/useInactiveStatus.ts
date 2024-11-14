import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InactiveStatus } from "../../services/status";

export const useInactiveStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: InactiveStatusMutate, isPending } = useMutation({
    mutationFn: InactiveStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });

  return { isPending, InactiveStatusMutate };
};
