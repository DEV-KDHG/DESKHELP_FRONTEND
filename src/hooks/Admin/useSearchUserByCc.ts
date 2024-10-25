import { useQuery } from "@tanstack/react-query";
import { searchUserByCC } from "../../services";

export const useSearchUserByCc = (cc: number) => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["users", cc],
    queryFn: () => searchUserByCC(cc),
    enabled: cc > 0, // Solo se ejecuta si cc es mayor a 0
  });

  return { isLoading, user };
};
