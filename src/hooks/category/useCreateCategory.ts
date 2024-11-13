import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCategory } from "../../services/categories";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutate: Category, isPending } = useMutation({
    mutationFn: CreateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
  });

  return { Category, isPending };
};
