import { useQuery } from "@tanstack/react-query"
import { GetUserInSession } from "../../services/User"


export const useGetUserInSession=()=>{

    const{data:getCurrentUser,isLoading}=useQuery({

        queryKey:["userInSession"],
        queryFn: GetUserInSession,

    })

    return{getCurrentUser,isLoading}
}