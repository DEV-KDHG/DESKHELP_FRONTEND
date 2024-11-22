import { useNavigate } from "react-router-dom";
import Cards from "../../../components/ui/Cards";
import style from "./dashAgent.module.css";
import ticketsestados from "../../../../public/img/DashBoardNew/consultarticket.png";
import Histoeial from "../../../../public/img/DashBoardNew/historial.png";
import ticketsProces from "../../../../public/img/DashBoardNew/ticketsprocess.png";
import SideBarAgente from "../../../components/ui/SideBarAgente";

const DashBoardAgent = () => {
  const navigate = useNavigate(); // Hook para redirección
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminamos el token del localStorage
    navigate("/"); // Redirigimos a la página de login
  };
  return (
    <>
    <SideBarAgente/>
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
      </div>

      <div className={style.container_cards}>
        {/* Tarjetas más importantes */}
      
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Crear avance de historia"}
          imagen={Histoeial}
          redireccion={"/crearAvanceYListarTicketsAgente"}
        />


<Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial de tickets"}
          imagen={Histoeial}
          redireccion={"/verhistoriaAgentes"}
        />
    

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Consultar tickets por estados"}
          imagen={ticketsestados}
          redireccion={"/estadosTickts-admin"}
        />
         <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Cerrado"}
          imagen={ticketsProces}
          redireccion={"/ticketsCerradoAgent"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Abierto"}
          imagen={ticketsProces}
          redireccion={"/ticketsAbiertoAgent"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Progreso"}
          imagen={ticketsProces}
          redireccion={"/ticketesEnProgresoAgente"}
        />
      </div>
    </>
  );
};

export default DashBoardAgent;
