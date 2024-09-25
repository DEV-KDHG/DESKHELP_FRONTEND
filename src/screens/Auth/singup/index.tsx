import ButtonComponet from "../../../components/ui/Button";
import ButtonLink from "../../../components/ui/ButtonLink";
import InputComponet from "../../../components/ui/Input";
import style from "./singup.module.css";
const Signup = () => {
  return (
    <div className={style.container}>
      <div className={style.form_login}>
        <div className={style.logo_container}>
          <img
            className={style.img_logo}
            src={"./img/logodef.png"}
            alt="logo"
          />
        </div>

        <div className={style.forms}>
          <div className={style.forms_header}>
            <h2>Crear usuario</h2>
            <span>Bienvenido de vuelta!</span>
          </div>
          <div className={style.container_input}>
            <InputComponet label="E-mail" type="email" />

            <InputComponet label="Password" type="password" />

            <InputComponet label="Name" type="text" />

            <InputComponet label="Lastname" type="text" />

            <InputComponet label="phone" type="text" />

            <InputComponet label="phone" type="text" />

            <div className={style.list}>
              <form action="#"></form>
              <span>Rol</span>
              <select name="lenguajes" id="lang">
                <option value="">Seleccione</option>

                <option value="Usuario">Usuario</option>
                <option value="Agente">Agente</option>
              </select>
            </div>

            <div className={style.container_buttons}>
              <ButtonComponet label={"Enviar"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
