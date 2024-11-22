import { useNavigate } from "react-router-dom";
import style from "./dash.module.css";
import SideBarComponent from "../../../components/ui/SideBar";
import Cards from "../../../components/ui/Cards";

import ticketsProces from "../../../../public/img/DashBoardNew/TicketIN PROCESS.png";
import ticketsOPEN from "../../../../public/img/DashBoardNew/Ticket OPEN.png";
import ticketsCLOSED from "../../../../public/img/DashBoardNew/Ticket CLOSED.png";
import Histoeial from "../../../../public/img/DashBoardNew/historial.png";

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
        <SideBarComponent />
      </div>

      <div className={style.container_cards}>
       

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial"}
          imagen={Histoeial}
          redireccion={"/verhistoria"}
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
          imagen={ticketsOPEN}
          redireccion={"/ticketsAbierto"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Progreso"}
          imagen={ticketsCLOSED}
          redireccion={"/ticketesEnProgreso"}
        />
      </div>
    </>
  );
};

export default DashBoardUser;
