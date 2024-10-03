import React from "react";
import ButtonComponent from "../../../../components/ui/Button";
import ButtonLink from "../../../../components/ui/ButtonLink";
import InputComponent from "../../../../components/ui/Input";
import style from "./login.module.css";
import { UserDto } from "../../../../models/user";
import useCustomerForm from "../../../../hooks/form/useCustomerForm";
import Error from "../../../../components/ui/Error";

const Login = () => {
  const loginSuccess = (data: UserDto) => {
    console.log("Datos enviados:", data);
    // Aquí puedes manejar la lógica de inicio de sesión
  };

  const { register, handleSubmit, errors } =
    useCustomerForm<UserDto>(loginSuccess);

  return (
    <div className={style.container}>
      <div className=""></div>

      <div className={style.form_login}>
        <div className={style.img_logo_container}>
          <img className={style.img_logo} src="/img/logodef.png" alt="logo" />
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <div className={style.header_form}>
            <h2>Login Here</h2>
            <span>¡Bienvenido de vuelta!</span>
          </div>

          <div className={style.container_input}>
            <InputComponent
              id="username"
              label="E-mail"
              type="email"
              {...register("username", {
                required: "El Email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email no válido",
                },
              })}
            />
            {errors.username && <Error>{errors.username.message}</Error>}

            <InputComponent
              id="password"
              label="Password"
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "El valor mínimo es de 8 caracteres",
                },
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}

            <ButtonComponent label="Acceder" />
          </div>

          <ButtonLink name="¿Olvidaste tu contraseña?" />
        </form>
      </div>
    </div>
  );
};

export default Login;