import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateSatus } from "../../services/status";

export const useCreateStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: CreateSatusMutation, isPending } = useMutation({
    mutationFn: CreateSatus,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });

  return { CreateSatusMutation, isPending };
};
