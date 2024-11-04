import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserByCode } from "../../services";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate: updateUserMutate, isPending } = useMutation({
    mutationFn: updateUserByCode,

    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["users"]})
    }
  });

  return { updateUser: updateUserMutate, isPending };
};
