import { useQuery } from "@tanstack/react-query";
import { getAllTicketsByStatus } from "../../services/tickets";

export const useGetAllTicketByStatus = (status:string) => {
  const { isLoading, data: TicketsMultiFilter } = useQuery({
    queryKey: ["ticket", status], // Incluir los filtros en el queryKey para invalidaciones y caching
    queryFn: () => getAllTicketsByStatus({status}), // Pasar filtros directamente al servicio
    refetchInterval: 2000, // Refrescar cada 2 segundos
  });

  return { TicketsMultiFilter, isLoading };
};
