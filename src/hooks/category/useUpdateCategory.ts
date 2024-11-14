import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCategory } from "../../services/categories";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: updateCategoryMutate, isPending } = useMutation({
    mutationFn: UpdateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });
  return { updateCategoryMutate, isPending };
};
