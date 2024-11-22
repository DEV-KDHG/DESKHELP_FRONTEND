import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/Admin";

export const UseLogin = () => {
  const navigate = useNavigate();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { role } = data;
      const path =
        role === "ADMIN"
          ? "/dashboard_admin"
          : role === "USER"
          ? "/dashboard_user"
          : role === "AGENT"
          ? "/dashboard_agente"
          : "/";

           navigate(path);
    },
  });

  return { login: loginMutate, isPending };
};
