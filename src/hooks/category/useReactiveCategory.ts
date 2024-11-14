import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReactiveStatus } from "../../services/status";

export const useReactiveCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: reactiveCategory, isPending } = useMutation({
    mutationFn: ReactiveStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inactivesCategories"] });
    },
  });

  return { reactiveCategory, isPending };
};
