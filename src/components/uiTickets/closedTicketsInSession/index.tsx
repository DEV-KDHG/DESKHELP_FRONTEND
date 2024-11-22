import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllTicketsClosedInSession } from "../../../hooks";
import { Paper } from "@mui/material";
import SideBarUser from "../../ui/sideBarUser";

export const ClosedTicketsInSession = () => {
  const { isLoading, ticketClosed } = useGetAllTicketsClosedInSession();

  // Si ticketClosed es un arreglo
  const rows =
    ticketClosed?.map((ticket, index) => ({
      id: index,
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

    <> <SideBarUser /> 
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
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
    </>
  );
};

export default ClosedTicketsInSession;
