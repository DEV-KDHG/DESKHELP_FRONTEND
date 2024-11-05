import style from "./formEdit.module.css";
import InputComponent from "../../ui/Input";
import Error from "../../ui/Error";
import { UseFormRegister} from "react-hook-form";
import { updateUserDto } from "../../../models/user";

interface propsForms {
  registerUpdate: UseFormRegister<updateUserDto>;
  errorsUpdate: Record<string, { message?: string }>;

}

const FormsEditComponent = ({ registerUpdate, errorsUpdate }: propsForms) => {
 
  return (
    <>
      <div className={style.modal_edit}>
        <h1>EDITAR USUARIO</h1>
        <form>
          <div className={style.container_input_edit}>
            <InputComponent
              id="mail"
              label="E-mail"
              type="email"
              {...registerUpdate("mail", {
                required: "El e-mail es obligatorio",
              })}
            />{" "}
            {errorsUpdate.username && (
              <Error>{errorsUpdate.username.message}</Error>
            )}
            <InputComponent
              id="username"
              label="user-name"
              type="text"
              {...registerUpdate("username", {
                required: "El user-name es obligatorio",
              })}
            />
            {errorsUpdate.username?.message && (
              <Error>{errorsUpdate.username.message}</Error>
            )}
            <InputComponent
              id="nombre"
              label="Nombre"
              type="text"
              {...registerUpdate("name", {
                required: "El nombre es obligatorio",
              })}
            />{" "}
            {errorsUpdate.name?.message && (
              <Error>{errorsUpdate.name.message}</Error>
            )}
            <InputComponent
              id="apellido"
              label="Apellido"
              type="text"
              {...registerUpdate("lastName", {
                required: "El apellido es obligatorio",
              })}
            />{" "}
            {errorsUpdate.lastName?.message && (
              <Error>{errorsUpdate.lastName.message}</Error>
            )}
            <InputComponent
              id="cc"
              label="CC"
              type="number"
              {...registerUpdate("cc", {
                required: "El CC es obligatorio",
              })}
            />{" "}
            {errorsUpdate.cc?.message && (
              <Error>{errorsUpdate.cc.message}</Error>
            )}
            <InputComponent
              id="codigo-de-usuario"
              label="Codigo usuario"
              type="text"
              {...registerUpdate("code", {
                required: "El código es obligatorio",
              })}
            />
            {errorsUpdate.codeArea?.message && (
              <Error>{errorsUpdate.codeArea.message}</Error>
            )}
            <InputComponent
              id="telefono"
              label="Telefono"
              type="number"
              {...registerUpdate("phone", {
                required: "El teléfono es obligatorio",
              })}
            />{" "}
            {errorsUpdate.phone?.message && (
              <Error>{errorsUpdate.phone.message}</Error>
            )}
            <InputComponent
              id="role"
              label="Role"
              type="text"
              {...registerUpdate("role", {
                required: "El rol es obligatorio",
              })}
            />
            {errorsUpdate.role?.message && (
              <Error>{errorsUpdate.role.message}</Error>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormsEditComponent;
