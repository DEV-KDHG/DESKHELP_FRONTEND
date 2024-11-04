import { Box, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Error from "../../../components/ui/Error";
import Header from "../../../components/ui/Header";
import InputComponet from "../../../components/ui/Input";
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
import MenuButtonComponent from "../../../components/uiAdmin/buttonMenu";
import { useSearchUserByCc } from "../../../hooks/Admin";
import { useEffect, useState } from "react";
import { useUpdateUser } from "../../../hooks/Admin/useUpdateUser";

enum Role {
  Usuario = "Usuario final",
  Admin = "Administrador",
  Agente = "Agente",
}
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
              <div className={style.modal_edit}>
                <h1>EDITAR USUARIO</h1>
                <form >
                  <div className={style.container_input_edit}>
                    <InputComponet
                      id="mail"
                      label="E-mail"
                      type="email"
                      {...registerUpdate("mail", {
                        required: "El e-mail es obligatorio",
                      })}
                    />{" "}
                    {errors.username && (
                      <Error>{errors.username.message}</Error>
                    )}
                    <InputComponet
                      id="username"
                      label="user-name"
                      type="text"
                      {...registerUpdate("username", {
                        required: "El user-name es obligatorio",
                      })}
                    />
                    {errors.username?.message && (
                      <Error>{errors.username.message}</Error>
                    )}
                   
                    <InputComponet
                      id="nombre"
                      label="Nombre"
                      type="text"
                      {...registerUpdate("name", {
                        required: "El nombre es obligatorio",
                      })}
                    />{" "}
                    {errors.name?.message && (
                      <Error>{errors.name.message}</Error>
                    )}
                    <InputComponet
                      id="apellido"
                      label="Apellido"
                      type="text"
                      {...registerUpdate("lastName", {
                        required: "El apellido es obligatorio",
                      })}
                    />{" "}
                    {errors.lastName?.message && (
                      <Error>{errors.lastName.message}</Error>
                    )}
                    <InputComponet
                      id="cc"
                      label="CC"
                      type="number"
                      {...registerUpdate("cc", {
                        required: "El CC es obligatorio",
                      })}
                    />{" "}
                    {errors.cc?.message && <Error>{errors.cc.message}</Error>}
                    <InputComponet
                      id="codigo-de-usuario"
                      label="Codigo usuario"
                      type="text"
                      {...registerUpdate("code", {
                        required: "El código es obligatorio",
                      })}
                    />
                    {errors.codeArea?.message && (
                      <Error>{errors.codeArea.message}</Error>
                    )}
                    <InputComponet
                      id="telefono"
                      label="Telefono"
                      type="number"
                      {...registerUpdate("phone", {
                        required: "El teléfono es obligatorio",
                      })}
                    />{" "}
                    {errors.phone?.message && (
                      <Error>{errors.phone.message}</Error>
                    )}
                    <InputComponet
                      id="role"
                      label="Role"
                      type="text"
                      {...registerUpdate("role", {
                        required: "El rol es obligatorio",
                      })}
                    />
                    {errors.role?.message && (
                      <Error>{errors.role.message}</Error>
                    )}
                  </div>
                </form>
              </div>
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
        {" "}
        <Header />
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
          <InputComponet
            id="mail"
            label="E-mail"
            type="email"
            {...register("mail", {
              required: "El e-mail es obligatorio",
            })}
          />{" "}
          {errors.username && <Error>{errors.username.message}</Error>}
          <InputComponet
            id="username"
            label="user-name"
            type="text"
            {...register("username", {
              required: "El user-name es obligatorio",
            })}
          />
          {errors.username?.message && <Error>{errors.username.message}</Error>}
          <InputComponet
            id="password"
            label="Contraseña"
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "El valor mínimo es de 8 caracteres",
              },
            })}
          />{" "}
          {errors.password?.message && <Error>{errors.password.message}</Error>}
          <InputComponet
            id="nombre"
            label="Nombre"
            type="text"
            {...register("name", {
              required: "El nombre es obligatorio",
            })}
          />{" "}
          {errors.name?.message && <Error>{errors.name.message}</Error>}
          <InputComponet
            id="apellido"
            label="Apellido"
            type="text"
            {...register("lastName", {
              required: "El apellido es obligatorio",
            })}
          />{" "}
          {errors.lastName?.message && <Error>{errors.lastName.message}</Error>}
          <InputComponet
            id="cc"
            label="CC"
            type="number"
            {...register("cc", {
              required: "El CC es obligatorio",
            })}
          />{" "}
          {errors.cc?.message && <Error>{errors.cc.message}</Error>}
          <InputComponet
            id="codigo-de-area"
            label="Codigo de area"
            type="text"
            {...register("codeArea", {
              required: "El código de área es obligatorio",
            })}
          />
          {errors.codeArea?.message && <Error>{errors.codeArea.message}</Error>}
          <InputComponet
            id="telefono"
            label="Telefono"
            type="number"
            {...register("phone", {
              required: "El teléfono es obligatorio",
            })}
          />{" "}
          {errors.phone?.message && <Error>{errors.phone.message}</Error>}
          <InputComponet
            id="role"
            label="Role"
            type="text"
            {...register("role", {
              required: "El rol es obligatorio",
            })}
          />
          {errors.role?.message && <Error>{errors.role.message}</Error>}
        </ModalComponent>
      </div>

      <div className={style.container_table}>
        <Paper sx={{ height: 450, width: "96%" }}>
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
