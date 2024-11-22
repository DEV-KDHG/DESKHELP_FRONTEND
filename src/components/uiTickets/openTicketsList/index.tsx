import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useGetAllTicketOpen } from "../../../hooks"; // Asegúrate de que el nombre del hook sea correcto
import style from "./index.module.css"
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
    { field: "code", headerName: "CÓDIGO", width: 80 },
    { field: "affair", headerName: "ASUNTO", width: 150 },
    { field: "body", headerName: "CUERPO", width: 200 },
    { field: "createDate", headerName: "FECHA DE CREACIÓN", width: 140 },
    { field: "file", headerName: "ARCHIVO", width: 120 },
    { field: "fullNameUserCrea", headerName: "USUARIO CREADOR", width: 100 },
    { field: "categoryName", headerName: "CATEGORÍA", width: 110 },
    { field: "priorityName", headerName: "PRIORIDAD", width: 110 },
    { field: "statusName", headerName: "ESTADO", width: 110, 
      renderCell: (params) => (
        <span className={style.Text}>{params.value}</span>
      )
    }
    
  ];

  return (
    
      <Paper sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoPageSize
          loading={isLoading} // Indicador de carga mientras se obtienen los datos
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
    
  );
};

export default OpenTicketsList;
