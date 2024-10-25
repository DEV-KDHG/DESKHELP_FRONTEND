import { useMutation } from "@tanstack/react-query"
import { inactivarUser } from "../../services";

export const useInactiveUserByCode =()=>{

    const{ mutate:useInactiveUser ,isError, isPending}= useMutation({

        mutationFn: inactivarUser,
    });

    return{ userDeactivate: useInactiveUser,isError, isPending}
}