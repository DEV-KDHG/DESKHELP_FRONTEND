import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveHistory } from "../../services/history";

export const useCreateHistory = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: createHistoryMutation } = useMutation({
    mutationFn: saveHistory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["history"] });
    },
  });
  return { isPending, createHistoryMutation };
};
