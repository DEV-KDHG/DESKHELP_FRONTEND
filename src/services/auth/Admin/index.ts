import { helpdesk } from "../../../api";
import { User } from "../../../models/user";

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
