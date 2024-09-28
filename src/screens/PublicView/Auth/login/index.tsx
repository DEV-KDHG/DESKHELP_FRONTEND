import ButtonComponet from "../../../../components/ui/Button";
import ButtonLink from "../../../../components/ui/ButtonLink";
import InputComponet from "../../../../components/ui/Input";
import style from "./login.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.form_login}>
        <div className={style.img_logo_container}>
          <img className={style.img_logo} src="/img/logodef.png" alt="logo" />
        </div>
        <div className={style.form}>
          <div className={style.header_form}>
            <h2>Login Here</h2>
            <span>Bienvenido de vuelta!</span>
          </div>

          <div className={style.container_input}>
            <InputComponet label="E-mail" type="email" />

            <InputComponet label="Password" type="password" />

            <ButtonComponet label="Acceder" />
          </div>
          <div className={style.button_link}>
    
            <ButtonLink name={"¿Olvidastes tu contraseña?"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
