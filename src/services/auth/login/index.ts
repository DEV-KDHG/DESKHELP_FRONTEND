import { helpdesk } from "../../../api";
import { User } from "../../../models/user";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data  } = await helpdesk.post("ruta backend", { username, password });

  localStorage.setItem("token", JSON.stringify(data.token));

  return data as User ;
};
