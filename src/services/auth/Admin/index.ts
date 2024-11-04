import { jwtDecode } from "jwt-decode";
import { helpdesk } from "../../../api";
import { updateUserDto, User, UserDto } from "../../../models/user";

interface JwtPayload {
  role: string;
}

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const { data } = await helpdesk.post("/login", { username, password });
  localStorage.setItem("token", data.token);

  const decodedToken = jwtDecode<JwtPayload>(data.token);
  const role = decodedToken.role;

  return { ...data, role };
};

export const getAllusers = async () => {
  const { data } = await helpdesk.get(`/user/users/getAll`);
  const users = data as User[];

  const activeUsers = users.filter(user=> user.state === 'A');
  const deactivateUsers = users.filter(user=> user.state === 'I')

  return {activeUsers, deactivateUsers};
};

export const singup = async (user: UserDto) => {
  const { data } = await helpdesk.post("/register", user);
  return data as User;
};

export const inactivarUser = async (code: number) => {
  const { data } = await helpdesk.put(`/user/deactivate?code=${code}`);

  return data;
};

export const searchUserByCC = async (cc: number) => {
  const { data } = await helpdesk.get(`/user/findByCC?cc=${cc}`);
  return data[0] as User;
};

//Jonh
export const updateUserByCode = async (updateUser: updateUserDto ) => {
  const { data } = await helpdesk.put(`/user/updateByCode`,null,{
    params:{
      code: updateUser.code,
      name: updateUser.name,
      lastName: updateUser.lastName,
      mail: updateUser.mail,
      phone: updateUser.phone,
      role: updateUser.role
    }
  });
  return data;
};
