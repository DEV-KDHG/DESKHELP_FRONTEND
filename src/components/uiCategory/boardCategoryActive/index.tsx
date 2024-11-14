import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useGetAllCategories,
  useInactiveCategory,
  useUpdateCategory,
} from "../../../hooks";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { UpdateCategoryDto } from "../../../models/category";
import { Box, Paper } from "@mui/material";
import MenuButtonComponent from "../../uiAdmin/buttonMenu";
import FormUpdateCategoryComponent from "../formsUpdate";
import style from "./Board.module.css"

const BoardCategoryACtiveComponent = () => {
  const { deleteCategory, isPending: isPendingDelete } = useInactiveCategory();
  const { updateCategoryMutate, isPending: isPendingUpdate } =
    useUpdateCategory();
  const { isLoading, category } = useGetAllCategories();

  const updateCategorySuccess = async (data: UpdateCategoryDto) => {
    await updateCategoryMutate({
      ...data,
    });
  };

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<UpdateCategoryDto>(updateCategorySuccess);

  const columns: GridColDef[] = [
    { field: "name", headerName: "CATEGORIA", width: 230 },
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
              onDeactivate={() => deleteCategory(params.row.code)}
              isPendingDeactivate={isPendingDelete}
              onEdit={handleSubmitUpdate}
              isPendingEdit={isPendingUpdate}
              title={"Eliminar categoria"}
              label={
                "¿Estas seguro que quieres eliminar esta categoria? Todos los datos" +
                "de esta categoria seran removidos hasta que sea activado nuevamemte"
              }
            >
              <FormUpdateCategoryComponent
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
    category?.content?.map((category, index) => ({
      id: index,
      code: category.code || "",
      name: category.name || "",
      statusE: category.statusEntity || "",
    })) || [];

  return (
    <>
    <div className={style.container_table_status}>
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

export default BoardCategoryACtiveComponent;
