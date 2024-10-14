import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Error from "../../../components/ui/Error";
import Header from "../../../components/ui/Header";
import InputComponet from "../../../components/ui/Input";
import ModalComponent from "../../../components/ui/Modal";
import SideBarComponent from "../../../components/ui/SideBar";
import { UseSingup } from "../../../hooks/auth/useSingup";
import useCustomerForm from "../../../hooks/form/useCustomerForm";
import { UserDto } from "../../../models/user";
import style from "./Admin.module.css";
import { useGetAllUsers } from "../../../hooks";
import SearchBoxComponent from "../../../components/ui/searchBox";
enum Role {
  Usuario = "Usuario final",
  Admin = "Administrador",
  Agente = "Agente",
}
const Admin = () => {
  const { singup, isPending } = UseSingup();
  const { isLoading, users } = useGetAllUsers();

  const singupSuccess = (data: UserDto) => {
    console.log("Datos enviados:", data);
    singup({
      username: data.username,
      name: data.name,
      cc: data.cc,
      lastName: data.lastName,
      mail: data.mail,
      phone: data.phone,
      password: data.password,
      codeArea: data.codeArea,
      role: data.role,
    });
  };
  const columns: GridColDef[] = [
    { field: "username", headerName: "USERNAME", width: 130 },
    { field: "name", headerName: "NOMBRE", width: 130 },
    { field: "cc", headerName: "CC", width: 130 },
    { field: "lastName", headerName: "APELLIDO", width: 130 },
    { field: "mail", headerName: "CORREO", width: 200 },
    { field: "phone", headerName: "TELEFONO", width: 130 },
    { field: "codeArea", headerName: "CODIGO DE AREA ", width: 130 },
    { field: "role", headerName: "ROL", width: 130 },
  ];

  const rows =
    users?.map((user, index) => ({
      id: index,
      username: user.username,
      name: user.name,
      cc: user.cc,
      lastName: user.lastName,
      mail: user.mail,
      phone: user.phone,
      codeArea: user.codeArea,
      role: user.role,
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
        <SearchBoxComponent placeholder={"buscar usurios"} />
      </div>

      <div className={style.container_modal_component}>
        <ModalComponent title={"Nuevo usurio"} onClick={handleSubmit}>
          <InputComponet id="mail" label="E-mail" type="email" />
          <InputComponet
            id="username"
            label="user-name"
            type="text"
            {...register("username", {
              required: "El nombre de usuario es obligatorio",
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
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
            type="enum"
            options={Object.values(Role)}
            {...register("role", {
              required: "El rol es obligatorio",
            })}
          />
          {errors.role?.message && <Error>{errors.role.message}</Error>}
        </ModalComponent>
      </div>

      <div className={style.container_table}>
        <Paper sx={{ height: 450, width: "104%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{
              "& .MuiDataGrid-cell": {
                fontSize: "1.2rem", // Tamaño de letra para las celdas
              },
              "& .MuiDataGrid-columnHeaders": {
                fontSize: "1.2rem", // Tamaño de letra para los encabezados de columna
              },
            }}
          />
        </Paper>
      </div>
    </>
  );
};

export default Admin;
