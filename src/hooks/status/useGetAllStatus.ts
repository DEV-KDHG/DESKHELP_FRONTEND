import { useQuery } from "@tanstack/react-query";
import { GetAllStatus } from "../../services/status";
import { PaginatedResponse } from "../../models/paginateData";
import { StatusDto } from "../../models/status";

export const useGetAllStatus = (
  page = 0,
  size = 10,
  sortBy = "name",
  direction = "asc",
  statusEntity = "ACTIVE"
) => {
  const { isLoading, data: status } = useQuery<PaginatedResponse<StatusDto>>({
    queryKey: ["status", page, size, sortBy, direction, statusEntity],
    queryFn: () => GetAllStatus(page, size, sortBy, direction, statusEntity),
    staleTime: 5000, // keep previous data for 5 seconds
  });

  return { isLoading, status };
};
