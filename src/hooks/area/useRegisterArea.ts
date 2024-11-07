import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveArea } from "../../services/area";

export const useRegisterArea = () => {
  const queryClient = useQueryClient();

  const { mutate: registerArea, isPending } = useMutation({
    mutationFn: saveArea,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return { registerArea, isPending };
};
