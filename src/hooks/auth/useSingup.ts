import { useMutation, useQueryClient } from "@tanstack/react-query";

import { singup } from "../../services";

export const useSingup = () => {
  const queryClient = useQueryClient();
  const { mutate: SingupMutate, isPending } = useMutation({
    mutationFn: singup,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return { singup: SingupMutate, isPending };
};
