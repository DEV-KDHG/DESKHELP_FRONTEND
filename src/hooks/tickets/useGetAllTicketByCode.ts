import { useQuery } from "@tanstack/react-query";
import { getAllTicketsByCode } from "../../services/tickets";

export const useGetAllTicketByCode = (code: string) => {
  const { isLoading, data: TicketsCode } = useQuery({
    queryKey: ["ticket", code], // Incluir los filtros en el queryKey para invalidaciones y caching
    queryFn: () => getAllTicketsByCode({ code }), // Pasar filtros directamente al servicio
    refetchInterval: 2000, // Refrescar cada 2 segundos
  });

  return { TicketsCode, isLoading };
};
