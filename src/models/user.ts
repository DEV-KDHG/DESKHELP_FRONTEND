export interface User {
  username: string;
  phone: string;
  password: string;
}

export type UserDto = Omit<User,"phone">;
