import { useMutation } from "@tanstack/react-query"
import { inactivarUser } from "../../services";

export const useInactiveUserByCode =()=>{

    const{ mutate:useInactiveUser ,  isError}= useMutation({

        mutationFn: inactivarUser,
    });

    return{useInactiveUser,isError}
}