import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateChangePassword } from "../../services";

export const useUpdateChangePassword = () => {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateChangePassword } = useMutation({
    mutationFn: UpdateChangePassword,
    onSuccess: () => {
      // Invalida las consultas relacionadas con "user" después de una mutación exitosa
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { isPending, updateChangePassword };
};
