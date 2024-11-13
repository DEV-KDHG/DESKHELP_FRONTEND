import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InactiveCategory } from "../../services/categories";

export const useInactiveCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending } = useMutation({
    mutationFn: InactiveCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });

  return { deleteCategory, isPending };
};
