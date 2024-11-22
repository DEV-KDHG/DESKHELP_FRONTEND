import { useNavigate } from "react-router-dom";
import style from "./dash.module.css";
 import Cards from "../../../components/ui/Cards";
import ticketsProces from "../../../../public/img/DashBoardNew/ticketsprocess.png";
import Histoeial from "../../../../public/img/DashBoardNew/historial.png";
import SideBarUser from "../../../components/ui/sideBarUser";

const DashBoardUser = () => {
  const navigate = useNavigate(); // Hook para redirección

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminamos el token del localStorage
    navigate("/"); // Redirigimos a la página de login
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className={style.logout_button_container}>
        <button onClick={handleLogout} className={style.logout_button}>
          Salir
        </button>
      </div>
      <div className={style.container_sidebar}>
        <SideBarUser />
      </div>

      <div className={style.container_cards}>
       

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial"}
          imagen={Histoeial}
          redireccion={"/verhistoriaUser"}
        />
            {/* Tarjetas de administración de categorías y prioridades */}
            <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Crear avance de historia"}
          imagen={Histoeial}
          redireccion={"/crearAvanceYListarTickets"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Cerrado"}
          imagen={ticketsProces}
          redireccion={"/ticketsCerrado"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Abierto"}
          imagen={ticketsProces}
          redireccion={"/ticketsAbierto"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Progreso"}
          imagen={ticketsProces}
          redireccion={"/ticketesEnProgreso"}
        />
      </div>
    </>
  );
};

export default DashBoardUser;
