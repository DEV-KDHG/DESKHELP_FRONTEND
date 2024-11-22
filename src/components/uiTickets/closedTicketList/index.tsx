import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllTicketsClosed } from "../../../hooks";
import { Paper } from "@mui/material";
import style from "./close.module.css"

const ClosedTicketList = () => {
  const { isLoading, ticketClosed } = useGetAllTicketsClosed();

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
    { field: "fullNameUserCrea", headerName: "USUARIO CREADOR", width: 100 },
    { field: "categoryName", headerName: "CATEGORÍA", width: 110 },
    { field: "priorityName", headerName: "PRIORIDAD", width: 110 },
    { field: "statusName", headerName: "ESTADO", width: 110,
      renderCell: (params) => (
        <span className={style.redText}>{params.value}</span>
      )
     },
  ];

  return (
   
      <Paper sx={{ height: 500, width: "110%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          sx={{
            "& .MuiDataGrid-cell": {
              fontSize: "1.3rem",
              
            },
            "& .MuiDataGrid-columnHeaders": {
              fontSize: "1.4rem",
              
            },
          }}
          loading={isLoading}
        />
      </Paper>
  
  );
};

export default ClosedTicketList;
