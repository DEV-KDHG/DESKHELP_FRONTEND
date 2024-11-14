import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "../../services/categories";

export const useGetAllCategories = (
  page = 0,
  size = 10,
  sortBy = "name",
  direction = "asc",
  statusEntity = "ACTIVE"
) => {
  const { isLoading, data: category } = useQuery({
    queryKey: ["category", page, size, sortBy, direction, statusEntity],
    queryFn: () =>
      GetAllCategories(page, size, sortBy, direction, statusEntity),
    staleTime: 5000,
  });

  return { isLoading, category };
};
