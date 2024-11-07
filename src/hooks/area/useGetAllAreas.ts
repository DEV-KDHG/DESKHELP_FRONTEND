import { useQuery } from "@tanstack/react-query";
import { getAllAreas } from "../../services/area";

export const useGetAllAreas = () => {
  const { isLoading, data: areas } = useQuery({
    queryKey: ["areas"],
    queryFn: () => getAllAreas(),
  });

  return { isLoading, areas };
};
