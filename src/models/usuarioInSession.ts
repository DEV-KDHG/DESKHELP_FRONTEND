export interface UserInSession {
  username: string;
  name: string;
  lastName: string;
  role: string;
  mail: string;
  codeArea: number;
  cc: string;
  code: number;
  phone: string;
  photo: string;
}

export type UserInSessionDto = Omit<UserInSession, "idRol">;
export type updateUserInSessionDto = Partial<UserInSession>;
