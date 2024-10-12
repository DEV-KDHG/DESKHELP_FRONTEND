import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { singup } from "../../services/auth/signUp";

export const UseSingup = () => {
  const navigate = useNavigate();

  const { mutate: SingupMutate, isPending } = useMutation({
    mutationFn: singup,

    onSuccess: () => {
      navigate("/login");
    },
  });

  return { singup: SingupMutate, isPending };
};
