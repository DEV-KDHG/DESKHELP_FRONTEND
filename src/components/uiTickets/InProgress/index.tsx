import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllTicketInProcessInSession } from "../../../hooks"
import { Paper } from "@mui/material";


const ListTicketsInProgressInSession = () => {
    const {ticketProccesInSession:tickets, isLoading}=useGetAllTicketInProcessInSession();

    const columns: GridColDef[] = [
        { field: "code", headerName: "Código", width: 130 },
        { field: "affair", headerName: "Asunto", width: 230 },
        { field: "body", headerName: "Cuerpo", width: 230 },
        { field: "createDate", headerName: "Fecha de Creación", width: 180 },
        { field: "file", headerName: "Archivo", width: 130 },
        { field: "fullNameUserCrea", headerName: "Usuario Creador", width: 180 },
        { field: "categoryName", headerName: "Categoría", width: 130 },
        { field: "priorityName", headerName: "Prioridad", width: 130 },
        { field: "statusName", headerName: "Estado", width: 130 },
      ];
    
      const rows = tickets?.map((ticket, index) => ({
        id: index,
        code: ticket.code || "",
        affair: ticket.affair || "",
        body: ticket.body || "",
        createDate: ticket.createDate || "",
        file: ticket.file || "",
        fullNameUserCrea: ticket.fullNameUserCrea || "",
        categoryName: ticket.categoryName || "",
        priorityName: ticket.priorityName || "",
        statusName: ticket.statusName || "",
      })) || [];
    

  return (
    <div>
    <Paper sx={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize={true}
        rowBufferPx={200}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 10 : 5,
          bottom: params.isLastVisible ? 10 : 5,
        })}
        sx={{
          "& .MuiDataGrid-cell": {
            fontSize: "1.3rem",
            paddingLeft: "80px",
            paddingRight: "140px",
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontSize: "1.4rem",
            paddingLeft: "55px",
            textAlign: "center",
          },
        }}
      />
    </Paper>
  </div>
  )
}

export default ListTicketsInProgressInSession