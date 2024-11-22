import { helpdesk } from "../../../api";
import { UserChangePassowordDto } from "../../../models/userChangePassoword";
import { UserResetChangePassoword } from "../../../models/UserResetChangePassoword";

export const UpdateChangePassword = async (user: UserChangePassowordDto) => {
  const { currentPassword, newPassword } = user;

  // Enviamos los parámetros en la URL utilizando la opción 'params'
  const { data } = await helpdesk.put("/user/change-password", user, {
    params: { currentPassword, newPassword },
  });

  return data;
};

export const ResetChangePassword = async (user: UserResetChangePassoword) => {
  const { username, code } = user;

  // Enviamos los parámetros en la URL utilizando la opción 'params'
  const { data } = await helpdesk.put("/user/reset-password", user, {
    params: { username, code },
  });

  return data;
};
