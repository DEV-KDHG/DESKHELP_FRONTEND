import ButtonComponet from "../../../../components/ui/Button";
import ButtonLink from "../../../../components/ui/ButtonLink";
import Error from "../../../../components/ui/Error";
import InputComponet from "../../../../components/ui/Input";
import { UseSingup } from "../../../../hooks/auth/useSingup";
import useCustomerForm from "../../../../hooks/form/useCustomerForm";
import { UserDto } from "../../../../models/user";
import style from "./singup.module.css";
enum Role {
  Usuario = "Usuario",
  Admin = "Administrador",
}
const Signup = () => {
  const { singup, isPending } = UseSingup();

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

  const { register, handleSubmit, errors } =
    useCustomerForm<UserDto>(singupSuccess);
  return (
    <div className={style.container}>
      <div className={style.form_login}>
        <div className={style.img_logo_container}>
          <img className={style.img_logo} src="/img/logodef.png" alt="logo" />
        </div>
        <form noValidate >
          <div className={style.forms_header}>
            <h2>Crear usuario</h2>
            <span>Bienvenido de vuelta!</span>
          </div>
          <div className={style.container_input}>
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
            {errors.password?.message && (
              <Error>{errors.password.message}</Error>
            )}
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
            {errors.lastName?.message && (
              <Error>{errors.lastName.message}</Error>
            )}
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
            {errors.codeArea?.message && (
              <Error>{errors.codeArea.message}</Error>
            )}
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
              options={Object.values(Role)}
              {...register("role", {
                required: "El rol es obligatorio",
              })}
            />
            {errors.role?.message && <Error>{errors.role.message}</Error>}
          </div>
          <div className={style.container_buttons}>
            <ButtonComponet label={"Enviar"} onClick={handleSubmit} />
          </div>
        </form>
        <div className={style.forms}></div>
      </div>
    </div>
  );
};

export default Signup;
