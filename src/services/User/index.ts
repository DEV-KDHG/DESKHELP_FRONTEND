import { helpdesk } from "../../api"
import { UserInSession } from "../../models/usuarioInSession";

export const GetUserInSession= async ()=>{

    const {data}= await helpdesk.get("/user/current-session");

    return data as UserInSession;
}