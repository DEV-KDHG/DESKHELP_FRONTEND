export interface User {
  username: string;
  name: string;
  lastName: string;
  idRol: string;
  email: string;
  phone: string;
  password: string;
  idArea: string;
}

export type UserDto = Omit<User, "phone">;
