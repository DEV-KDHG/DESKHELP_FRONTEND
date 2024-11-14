import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse } from "../../models/paginateData";
import { PrioritiesDto } from "../../models/priorities";
import { GetAllPriorities } from "../../services/priorities";

export const useGetAllPriorities = (
    page = 0,
    size = 10,
    sortBy = "name",
    direction = "asc",
   ) => {
    const { isLoading, data: priorities } = useQuery<PaginatedResponse<PrioritiesDto>>({
      queryKey: ["priorities", page, size, sortBy, direction],
      queryFn: () => GetAllPriorities(page, size, sortBy, direction),
      staleTime: 5000, // keep previous data for 5 seconds
    });
  
    return { isLoading, priorities };
  };