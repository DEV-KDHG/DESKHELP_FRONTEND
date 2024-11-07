import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateArea } from "../../services/area";

export const useUpdateArea = () => {
  const queryClient = useQueryClient();

  const { mutate: updateAreaMutate, isPending } = useMutation({
    mutationFn: updateArea,
    onSuccess: () => {
      // Invalida la consulta "areas" para que se vuelva a obtener la lista actualizada.
      queryClient.invalidateQueries({ queryKey: ["areas"] });
    },
  });

  return {updateArea:  updateAreaMutate, isPending };
};
