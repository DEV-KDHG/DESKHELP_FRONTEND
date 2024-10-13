import { helpdesk } from "../../../api";
import { User, UserDto } from "../../../models/user";

export const singup = async (user: UserDto) => {
  const { data } = await helpdesk.post("/register", user);
  const { token } = data;
  localStorage.setItem("token", JSON.stringify(token));
  return data as User;
};
