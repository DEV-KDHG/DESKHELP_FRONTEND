export interface User {
  username: string;
  name: string;
  cc: string;
  lastName: string;
  mail: string;
  phone: string | null;
  password: string;
  codeArea: string;
  state?:string;
  code?: string,
  role?: string;
  areaName?:string
}

export type UserDto = Omit<User, "idRol">;
export type updateUserDto = Partial<User>;
