import { Box, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../../../components/ui/Header";
import ModalComponent from "../../../components/ui/Modal";
import SideBarComponent from "../../../components/ui/SideBar";
import { updateUserDto, UserDto } from "../../../models/user";
import style from "./Admin.module.css";
import {
  useGetAllUsers,
  useInactiveUserByCode,
  useSingup,
} from "../../../hooks";
import SearchBoxComponent from "../../../components/ui/searchBox";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { useSearchUserByCc } from "../../../hooks/Admin";
import { useEffect, useState } from "react";
import { useUpdateUser } from "../../../hooks/Admin/useUpdateUser";
import FormsEditComponent from "../../../components/uiAdmin/forms";
import MenuButtonComponent from "../../../components/uiAdmin/buttonMenu";
import FormsUserComponent from "../../../components/uiAdmin/formsRegisterUser";

const Admin = () => {
  const {
    userDeactivate,
    isError,
    isPending: isDeactivatePending,
  } = useInactiveUserByCode();
  const { singup, isPending: isSingupPending } = useSingup();
  const { isLoading: isUsersLoading, activeUsers } = useGetAllUsers();
  const [filteredUsers, setFilteredUsers] = useState<UserDto[] | null>(null);
  const [cc, setCc] = useState<string>("");
  const { isLoading: isUserLoading, user } = useSearchUserByCc(Number(cc));
  const [debouncedCc, setDebouncedCc] = useState<string>(cc);
  const { updateUser, isPending: isPendingUpdate } = useUpdateUser();
  const updateUserSuccess = async (data: updateUserDto) => {
    await updateUser({
      ...data,
    });
  };
  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    errors: errorsUpdate,
    reset,
  } = useCustomerForm<updateUserDto>(updateUserSuccess);

  const handledEdit = (userData: updateUserDto) => {
    reset(userData);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCc(cc);
    }, 300); // retrasa el valor ingresado en sbox

    return () => clearTimeout(handler);
  }, [cc]);

  useEffect(() => {
    setFilteredUsers(cc && user ? [user] : activeUsers ?? []);
  }, [cc, user, activeUsers]);

  const singupSuccess = async (data: UserDto) => {
    await singup({
      ...data,
    });
  };

  const columns: GridColDef[] = [
    { field: "username", headerName: "USERNAME", width: 110 },
    { field: "name", headerName: "NOMBRE", width: 100 },
    { field: "lastName", headerName: "APELLIDO", width: 100 },
    { field: "cc", headerName: "CC", width: 130 },
    { field: "mail", headerName: "CORREO", width: 150 },
    { field: "phone", headerName: "TELEFONO", width: 110 },
    { field: "code", headerName: "CODIGO", width: 90 },
    { field: "areaName", headerName: "NOMBRE AREA", width: 254 },
    { field: "role", headerName: "ROL", width: 80 },
    {
      field: "actions",
      headerName: "ACCIONES",
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
              onDeactivate={() => userDeactivate(params.row.code)}
              isPendingDeactivate={isDeactivatePending}
              onEdit={handleSubmitUpdate}
              isPendingEdit={isPendingUpdate}
              title={"Desactivar cuenta"}
              label={
                "¿Estas seguro que quieres desactivar esta cuenta? Todos los datos" +
                "de este usuario seran removidos hasta que sea activado nuevamemte"
              }
            >
              <FormsEditComponent
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
    filteredUsers?.map((user, index) => ({
      id: index,
      username: user.username || "",
      name: user.name || "",
      cc: user.cc || "",
      lastName: user.lastName || "",
      mail: user.mail || "",
      phone: user.phone || "",
      code: user.code ? String(user.code) : "",
      areaName: user.areaName || "",
      role: user.role || "",
    })) || [];

  const paginationModel = { page: 0, pageSize: 5 };
  const { register, handleSubmit, errors } =
    useCustomerForm<UserDto>(singupSuccess);

  return (
    <>
      <div>
   
      </div>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>
      <div className={style.container_search}>
        <SearchBoxComponent
          setInfo={setCc}
          placeholder={"buscar usurios por CC"}
        />
      </div>
      <div className={style.container_modal_component}>
        <ModalComponent title={"Nuevo usurio"} onClick={handleSubmit}>
          <FormsUserComponent register={register} errors={errors} />
        </ModalComponent>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <Paper sx={{ height: 350, width: "85%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "1.3rem", // Tamaño de letra para las celdas
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.4rem", // Tamaño de letra para los encabezados de columna
              },
            }}
          />
        </Paper>
      </div>
    </>
  );
};
export default Admin;
