import { useQuery } from "@tanstack/react-query";
import { GetAllInactivesCategories } from "../../services/categories";

export const useGetAllInactivesCategories = (
    page = 0,
    size = 10,
    sortBy = "name",
    direction = "asc",
    
) => {
  const { isLoading, data: inactivesCategories } = useQuery({
    queryKey: ["inactivesCategories",page,size,sortBy,direction],
    queryFn:()=> GetAllInactivesCategories(page,size,sortBy,direction)
  });

  return { isLoading, inactivesCategories };
};
