import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReactiveStatus } from "../../services/status";

export const useReactiveStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: ReactiveStatusMutate, isPending } = useMutation({
    mutationFn: ReactiveStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });

  return { isPending, ReactiveStatusMutate };
};
