import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdatePriorities } from "../../services/priorities";

export const useUpdatePriorities = () => {
  const queryClient = useQueryClient();
  const { mutate: UpdatePrioritiesMutate, isPending } = useMutation({
    mutationFn: UpdatePriorities,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["priorities"] });
    },
  });

  return { isPending, UpdatePrioritiesMutate };
};
