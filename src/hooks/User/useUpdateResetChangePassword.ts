import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ResetChangePassword } from "../../services";

export const useUpdateResetChangePassword=()=>{
    const queryClient = useQueryClient();

    const {mutate:UpdateUserResetChangePassoword, isPending}=useMutation({

mutationFn:ResetChangePassword,

onSuccess:()=> queryClient.invalidateQueries({queryKey:["users"]}),


    });
    return{UpdateUserResetChangePassoword,isPending};
}