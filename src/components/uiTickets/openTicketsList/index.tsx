import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useGetAllTicketOpen } from "../../../hooks"; // Asegúrate de que el nombre del hook sea correcto

const OpenTicketsList = () => {
  const { isLoading, ticketOpen } = useGetAllTicketOpen(); // Usamos el hook para obtener los tickets

  // Si ticketOpen es un arreglo
  const rows =
    ticketOpen?.map((ticket, index) => ({
      id: index, // Usamos el índice como ID único (deberías usar un campo único si está disponible)
      code: ticket.code,
      affair: ticket.affair,
      body: ticket.body,
      createDate: ticket.createDate,
      file: ticket.file,
      fullNameUserCrea: ticket.fullNameUserCrea,
      categoryName: ticket.categoryName,
      priorityName: ticket.priorityName,
      statusName: ticket.statusName,
    })) || [];

  const columns: GridColDef[] = [
    { field: "code", headerName: "CÓDIGO", width: 100 },
    { field: "affair", headerName: "ASUNTO", width: 150 },
    { field: "body", headerName: "CUERPO", width: 300 },
    { field: "createDate", headerName: "FECHA DE CREACIÓN", width: 150 },
    { field: "file", headerName: "ARCHIVO", width: 120 },
    { field: "fullNameUserCrea", headerName: "USUARIO CREADOR", width: 200 },
    { field: "categoryName", headerName: "CATEGORÍA", width: 150 },
    { field: "priorityName", headerName: "PRIORIDAD", width: 150 },
    { field: "statusName", headerName: "ESTADO", width: 150 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Paper sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          loading={isLoading} // Indicador de carga mientras se obtienen los datos
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "1rem",
              textAlign: "center",  
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.2rem",
              textAlign: "center",
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default OpenTicketsList;
