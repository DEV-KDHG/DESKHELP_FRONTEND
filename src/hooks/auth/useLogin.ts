import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/login";

export const UseLogin = () => {
  const navigate = useNavigate();
 

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,   // Usa la función de login definida arriba
    onSuccess: () => {
      navigate("/admin");
    }
  });

  return { login: loginMutate, isPending };
};
