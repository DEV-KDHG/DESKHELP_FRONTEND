import { helpdesk } from "../../../api";
import { User, UserDto } from "../../../models/user";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data } = await helpdesk.post("/login", { username, password });
  localStorage.setItem("token", data.token);
  return data as User;
};

export const getAllusers = async () => {
  const { data } = await helpdesk.get(`/user/users/getAll`);
  return data as User[];
  };

export const singup = async (user: UserDto) => {
  const { data } = await helpdesk.post("/register", user);
  return data as User;
};

export const inactivarUser = async (code: number)=>{
  const {data}= await helpdesk.put(`/user/deactivate/${code}`)
  return data;
}


