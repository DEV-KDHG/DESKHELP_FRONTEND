import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useGetAllTicket } from "../../../hooks";

const TicketList = () => {
  const { isLoading, ticket } = useGetAllTicket();

  // Si ticket es un arreglo
  const rows =
    ticket?.map((ticketItem, index) => ({
      id: index,
      code: ticketItem.code,
      affair: ticketItem.affair,
      body: ticketItem.body,
      createDate: ticketItem.createDate,
      file: ticketItem.file,
      fullNameUserCrea: ticketItem.fullNameUserCrea,
      categoryName: ticketItem.categoryName,
      priorityName: ticketItem.priorityName,
      statusName: ticketItem.statusName,
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
          loading={isLoading}
        />
      </Paper>
    </div>
  );
};

export default TicketList;
