export interface User {
  name: string;
  phone: string;
  password: string;
}

export type UserDto = Partial<User>;
