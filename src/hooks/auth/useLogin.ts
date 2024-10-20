import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/Admin";

export const UseLogin = () => {
  const navigate = useNavigate();
 

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,  
    onSuccess: () => {
      navigate("/admin");
    }
  });

  return { login: loginMutate, isPending };
};
