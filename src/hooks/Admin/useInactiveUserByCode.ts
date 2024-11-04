import { useMutation, useQueryClient } from "@tanstack/react-query"
import { inactivarUser } from "../../services";

export const useInactiveUserByCode =()=>{

    const queryClient = useQueryClient();
    const{ mutate:useInactiveUser ,isError, isPending}= useMutation({

        mutationFn: inactivarUser,

        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["users"]})
        },
    });

    return{ userDeactivate: useInactiveUser,isError, isPending}
}