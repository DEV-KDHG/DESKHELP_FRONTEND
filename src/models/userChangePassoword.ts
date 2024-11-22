export interface UserChangePassoword {
  currentPassword: string;
  newPassword: string;
}
export type UserChangePassowordDto = Omit<UserChangePassoword, "id">;
export type UpdateUserChangePassowordDto = Partial<UserChangePassoword>;
