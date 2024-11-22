import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRegisterArea } from "../../../hooks/area/useRegisterArea";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import {
  AreaDto,
  UpdateAreaDto,
  UpdateAreaRequest,
} from "../../../models/area";
import { Box, Paper } from "@mui/material";
import { useGetAllAreas } from "../../../hooks/area/useGetAllAreas";
import { useEffect, useState } from "react";
import { useSearchAreaByCode } from "../../../hooks/area/useSearchAreaByCode";
import { useUpdateArea } from "../../../hooks/area/useUpdateArea";
import SideBarComponent from "../../../components/ui/SideBar";
import SearchBoxComponent from "../../../components/ui/searchBox";
import InputComponent from "../../../components/ui/Input";
import ModalComponent from "../../../components/ui/Modal";
import Error from "../../../components/ui/Error";
import style from "./Area.module.css";
import MenuButtonComponent from "../../../components/uiAdmin/buttonMenu";
import { Form } from "react-router-dom";
import { FormEditArea } from "../../../components/uiArea/formsEditArea";
const Area = () => {
  const { registerArea, isPending } = useRegisterArea();
  const { areas, isLoading } = useGetAllAreas();
  const [code, setCode] = useState<string>("");
  const [deboucedCode, setDebouncedCode] = useState<string>(code);
  const { isLoading: isAreaLoading, area } = useSearchAreaByCode(String(code));
  const [filteredAreas, setFilteredAreas] = useState<AreaDto[] | null>(null);
  const { updateArea, isPending: inPendingUpdate } = useUpdateArea();

  const updateAreaSuccess = async (data: UpdateAreaRequest) => {
    await updateArea({
      ...data,
    });
  };
  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
  } = useCustomerForm<UpdateAreaRequest>(updateAreaSuccess);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCode(code);
    }, 300); // retrasa el valor ingresado en sbox

    return () => clearTimeout(handler);
  }, [code]);

  useEffect(() => {
    setFilteredAreas(code && area ? [area] : areas ?? []);
  }, [area, code, areas]);

  // Áreas filtradas
  const saveArea = async (data: AreaDto) => {
    console.log("Datos enviados", data);
    await registerArea({
      ...data,
    });
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "NOMBRE", width: 150 },
    { field: "state", headerName: "ESTADO", width: 110 },
    { field: "code", headerName: "CÓDIGO", width: 90 },
    {
      field: "actions",
      headerName: "ACCIONES",
      width: 120,
      renderCell: (params) => (
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
            shouldShowDeactivateButton={false}
          >
            <FormEditArea
              errorsUpdate={errorsUpdate}
              registerUpdate={registerUpdate}
            />
          </MenuButtonComponent>
        </Box>
      ),
    },
  ];

  const rows =
    filteredAreas?.map((area, index) => ({
      id: index,
      name: area.name,
      state: area.state,
      code: area.code,
    })) || [];

  const paginationModel = { page: 0, pageSize: 5 };
  const { register, handleSubmit, errors } = useCustomerForm<AreaDto>(saveArea);

  return (
    <div>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>

      <div className={style.container_search}>
        <SearchBoxComponent
          setInfo={setCode}
          placeholder={"buscar por codigo de area"}
        />
      </div>

      <div className={style.container_modal_component}>
        <ModalComponent title={"Nueva Area"} onClick={handleSubmit}>
          <InputComponent
            id="name"
            label="Name"
            type="text"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}

          <InputComponent
            id="state"
            label="state"
            type="text"
            {...register("state", {
              required: "El nombre es obligatorio",
            })}
          />

          {errors.state && <Error>{errors.state.message}</Error>}
        </ModalComponent>
      </div>

      <div className={style.container_table}>
        <Paper sx={{ height: 450, width: "40%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "1.3rem",
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.4rem",
              },
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Area;
