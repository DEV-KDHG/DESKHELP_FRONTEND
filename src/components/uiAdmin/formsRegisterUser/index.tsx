import InputComponent from "../../ui/Input";
import { UseFormRegister } from "react-hook-form";
import { UserDto } from "../../../models/user";
import Error from "../../ui/Error";

interface PropsFormUser {
  register: UseFormRegister<UserDto>;
  errors: Record<string, { message?: string }>;
}
enum Role {
  Usuario = "Usuario final",
  Admin = "Administrador",
  Agente = "Agente",
}
const FormsUserComponent = ({ register, errors }: PropsFormUser) => {
  return (
    <>
      <InputComponent
        id="mail"
        label="E-mail"
        type="email"
        {...register("mail", {
          required: "El e-mail es obligatorio",
        })}
      />{" "}
      {errors.username && <Error>{errors.username.message}</Error>}
      <InputComponent
        id="username"
        label="user-name"
        type="text"
        {...register("username", {
          required: "El user-name es obligatorio",
        })}
      />
      {errors.username?.message && <Error>{errors.username.message}</Error>}
      <InputComponent
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
      <InputComponent
        id="nombre"
        label="Nombre"
        type="text"
        {...register("name", {
          required: "El nombre es obligatorio",
        })}
      />{" "}
      {errors.name?.message && <Error>{errors.name.message}</Error>}
      <InputComponent
        id="apellido"
        label="Apellido"
        type="text"
        {...register("lastName", {
          required: "El apellido es obligatorio",
        })}
      />{" "}
      {errors.lastName?.message && <Error>{errors.lastName.message}</Error>}
      <InputComponent
        id="cc"
        label="CC"
        type="number"
        {...register("cc", {
          required: "El CC es obligatorio",
        })}
      />{" "}
      {errors.cc?.message && <Error>{errors.cc.message}</Error>}
      <InputComponent
        id="codigo-de-area"
        label="Codigo de area"
        type="text"
        {...register("codeArea", {
          required: "El código de área es obligatorio",
        })}
      />
      {errors.codeArea?.message && <Error>{errors.codeArea.message}</Error>}
      <InputComponent
        id="telefono"
        label="Telefono"
        type="number"
        {...register("phone", {
          required: "El teléfono es obligatorio",
        })}
      />{" "}
      {errors.phone?.message && <Error>{errors.phone.message}</Error>}
      <InputComponent
        id="role"
        label="Role"
        type="text"
        {...register("role", {
          required: "El rol es obligatorio",
        })}
      />
      {errors.role?.message && <Error>{errors.role.message}</Error>}
    </>
  );
};

export default FormsUserComponent;
