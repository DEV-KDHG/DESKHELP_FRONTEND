import ButtonComponent from "../../../../components/ui/Button";
import ButtonLink from "../../../../components/ui/ButtonLink";
import InputComponent from "../../../../components/ui/Input";
import style from "./login.module.css";
import useCustomerForm from "../../../../hooks/form/useCustomerForm";
import Error from "../../../../components/ui/Error";
import { UseLogin } from "../../../../hooks/auth/useLogin";
import { LoginDto } from "../../../../models/loginDto";

const Login = () => {
  const { login, isPending } = UseLogin();

  const loginSuccess = (data: LoginDto) => {
    console.log("Datos enviados:", data);

    login({ username: data.username, password: data.password });
  };

  const { register, handleSubmit, errors } =
    useCustomerForm<LoginDto>(loginSuccess);

  return (
    <div className={style.container}>
      <div className={style.form_login}>
        <div className={style.img_logo_container}>
          <img className={style.img_logo} src="/img/logodef.png" alt="logo" />
        </div>
        <form noValidate>
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
              })}
            />
            {errors.username && <Error>{errors.username.message}</Error>}

            <InputComponent
              id="password"
              label="Password"
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}

            <ButtonComponent label="Acceder" onClick={handleSubmit} />
          </div>

          <ButtonLink name="¿Olvidaste tu contraseña?" />
        </form>
      </div>
    </div>
  );
};

export default Login;
