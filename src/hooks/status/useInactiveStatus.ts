import { useMutation } from "@tanstack/react-query";
import { InactiveStatus } from "../../services/status";

export const useInactiveStatus = () => {
  const { mutate: InactiveStatusMutate, isPending } = useMutation({
    mutationFn: InactiveStatus,
  });

  return { isPending, InactiveStatusMutate };
};
