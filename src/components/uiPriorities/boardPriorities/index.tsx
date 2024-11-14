import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllPriorities, useUpdatePriorities } from "../../../hooks";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { UpdatePrioritiesDto } from "../../../models/priorities";
import MenuButtonComponent from "../../uiAdmin/buttonMenu";
import { Box, Paper } from "@mui/material";
import FormUpdatePriorities from "../formsEdit";
import style from "./Board.module.css"
import { useState } from "react";
const BoardPrioritiesComponet = () => {
  const { isLoading, priorities } = useGetAllPriorities();
  const [selectCode, setSelectCode] = useState<string | undefined>(undefined);
  const { isPending: isPendingUpdatePriorities, UpdatePrioritiesMutate } =
    useUpdatePriorities();

    
    const updatePrioritiesSucces = async (data: UpdatePrioritiesDto) => {
      await UpdatePrioritiesMutate({
        ...data,
        code: selectCode ?? undefined, // Si selectCode es null, usa undefined
      });
      setSelectCode(undefined); // Restablecer selectCode después de actualizar
    };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdatePrioritiesDto>(updatePrioritiesSucces);

const handleGetCodeSelect=(code:string)=>{
  setSelectCode(code);
  reset();
}

   
  const columns: GridColDef[] = [
    { field: "code", headerName: "CODIGO", width: 100 },
    { field: "name", headerName: "NOMBRE", width: 120 },

    { field: "description", headerName: "DESCRIPCION", width: 900  , align: "left" ,headerAlign:"center"},
    {
      field: "actions",
      headerName: "Acciones",
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
              onEdit={handleSubmitUpdate}
              onDeactivate={() => {}}
            >
              <FormUpdatePriorities
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
    priorities?.content?.map((priorities, index) => ({
      id: index,
      code: priorities.code || "",

      name: priorities.name || "",

      description: priorities.description || "",

    
    })) || [];
  return (
    <>
      <div className={style.container_table_priorities}>
        <Paper sx={{ height: 450, width: "80%" }}>
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
                 textAlign: "center",
 
                
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.4rem", // Tamaño de letra para los encabezados de columna
                 textAlign: "center",
                
              },
            }}
          />
        </Paper>
      </div>
    </>
  );
};

export default BoardPrioritiesComponet;
