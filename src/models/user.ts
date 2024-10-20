export interface User {
  username: string;
  name: string;
  cc: string;
  lastName: string;
  mail: string;
  phone: number;
  password: string;
  code: number;
  role?: string;
  areaName?:string
}

export type UserDto = Omit<User, "idRol">;
export type updateUserDto = Partial<User>;
