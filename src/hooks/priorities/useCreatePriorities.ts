import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePriorities } from "../../services/priorities";

export const useCreatePriorities = () => {
  const queryClient = useQueryClient();
  const { mutate: CreatePrioritiesMutation, isPending } = useMutation({
    mutationFn: CreatePriorities,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["priorities"] });
    },
  });

  return { CreatePrioritiesMutation, isPending };
};
