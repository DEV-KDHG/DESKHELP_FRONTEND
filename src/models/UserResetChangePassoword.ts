 
export interface UserResetChangePassoword {
  username: string;
  code: string;
}
export type UserResetChangePassowordDto = Omit<UserResetChangePassoword, "id">;
export type UpdateUserResetChangePassowordDto =
  Partial<UserResetChangePassoword>;
