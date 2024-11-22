import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllTicketInProcess } from "../../../hooks"
import { Paper } from "@mui/material";
import style from "./process.module.css"

const ListTicketsInProcess = () => {
    const{ticketInProcces:tickets, isLoading}=useGetAllTicketInProcess();
    
  const columns: GridColDef[] = [
    { field: "code", headerName: "Código", width: 100 },
    { field: "affair", headerName: "Asunto", width: 130 },
    { field: "body", headerName: "Cuerpo", width: 230 },
    { field: "createDate", headerName: "Fecha de Creación", width: 145 },
    { field: "file", headerName: "Archivo", width: 130 },
    { field: "fullNameUserCrea", headerName: "Usuario Creador", width: 100 },
    { field: "fullNameUserAsignado", headerName: "Usuario Asignado", width: 100 },
    { field: "categoryName", headerName: "Categoría", width: 120 },
    { field: "priorityName", headerName: "Prioridad", width: 100 },
    { field: "statusName", headerName: "Estado", width: 120, 
      renderCell: (params) => (
        <span className={style.Text}>{params.value}</span>
      )
    },
  ];

  const rows = tickets?.map((ticket, index) => ({
    id: index,
    code: ticket.code,
    affair: ticket.affair,
    body: ticket.body,
    createDate: ticket.createDate,
    file: ticket.file,
    fullNameUserCrea: ticket.fullNameUserCrea,
    fullNameUserAsignado: ticket.fullNameUserAsignado,
    categoryName: ticket.categoryName,
    priorityName: ticket.priorityName,
    statusName: ticket.statusName,
  })) || [];
  return (
  
      <Paper sx={{ height: 450, width: "135%" }}>
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
              
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.4rem",
             
              textAlign: "center",
            },
          }}
        />
      </Paper>
   
  )
}

export default ListTicketsInProcess