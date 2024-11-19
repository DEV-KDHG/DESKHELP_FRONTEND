import { useQuery } from "@tanstack/react-query";
import { getTicketByMutiByFilter } from "../../services/tickets";

export const useGetTicketsMultiFilters = (filters: {
  affair: string;
  status: string;
  userAssigned: string;
}) => {
  const { isLoading, data: TicketsMultiFilter } = useQuery({
    queryKey: ["ticket", filters], // Incluir los filtros en el queryKey para invalidaciones y caching
    queryFn: () => getTicketByMutiByFilter(filters), // Pasar filtros directamente al servicio
    refetchInterval: 2000, // Refrescar cada 2 segundos
  });

  return { TicketsMultiFilter, isLoading };
};
