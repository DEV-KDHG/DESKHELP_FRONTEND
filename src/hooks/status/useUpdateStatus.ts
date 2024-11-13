import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStatus } from "../../services/status";

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: UpdateStatusMutate, isPending } = useMutation({
    mutationFn: UpdateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });

  return { isPending, UpdateStatusMutate };
};
