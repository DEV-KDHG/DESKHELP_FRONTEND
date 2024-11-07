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
          ? "/area"
          : role === "USER"
          ? "/usuario"
          : role === "AGENT"
          ? "/agente"
          : "/";

           navigate(path);
    },
  });

  return { login: loginMutate, isPending };
};
