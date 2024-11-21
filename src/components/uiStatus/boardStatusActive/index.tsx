import { Box, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MenuButtonComponent from "../../uiAdmin/buttonMenu";
import style from "./Board.module.css";
import {
  useGetAllStatus,
  useInactiveStatus,
  useUpdateStatus,
} from "../../../hooks";
import { UpdateStatusDto } from "../../../models/status";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import FormUpdateStatus from "../formsEdit";


const BoardStatusComponent = () => {
  const { isPending: isPendingInactiveStatus, InactiveStatusMutate: Inactive } =
    useInactiveStatus();
  const { isLoading, status } = useGetAllStatus();
  const { isPending: isPendingUpdateStatus, UpdateStatusMutate } =
    useUpdateStatus();
  const updateStatusSuccess = async (data: UpdateStatusDto) => {
    await UpdateStatusMutate({
      ...data,
    });
  };
  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdateStatusDto>(updateStatusSuccess);

  const columns: GridColDef[] = [
    { field: "name", headerName: "ESTADO", width: 230 },
    { field: "code", headerName: "CODIGO", width: 130 },
    {
      field: "actions",
      headerName: "",
      width: 120,

      renderCell: (params) => (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <MenuButtonComponent
              onDeactivate={() => Inactive(params.row.code)}
              isPendingDeactivate={isPendingInactiveStatus}
              onEdit={handleSubmitUpdate}
              isPendingEdit={isPendingUpdateStatus}
              title={"Desactivar este estado"}
              label={
                "¿Estas seguro que quieres desactivar el estado? Todos los datos" +
                "de este estado especifico seran removidos hasta que sea activado nuevamemte"
              }
            >
              <FormUpdateStatus
                errorsUpdate={errorsUpdate}
                registerUpdate={registerUpdate}
              />
            </MenuButtonComponent>
          </Box>
        </>
      ),
    },
  ];
  const rows =
    status?.content?.map((statu, index) => ({
      id: index,
      code: statu.code || "",
      name: statu.name || "",
      statusE: statu.statusEntity || "",
    })) || [];

  return (
    <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "55vh" }}>
        <Paper sx={{ height: 450, width: "45%"}}>
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
                fontSize: "1.3rem", // Tamaño de letra para las celdas
                paddingLeft: "80px", // Espacio a la izquierda
                paddingRight: "140px",
                textAlign: "center",
                
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.4rem", // Tamaño de letra para los encabezados de columna
                paddingLeft: "55px", // Espacio a la izquierda
                textAlign: "center",
               
              },
            }}
          />
        </Paper>
      </div>
    </>
  );
};

export default BoardStatusComponent;
