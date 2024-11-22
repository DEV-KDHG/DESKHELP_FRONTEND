import { useNavigate } from "react-router-dom";
import SideBarComponent from "../../../components/ui/SideBar";
import Cards from "../../../components/ui/Cards";
import style from "./dashAgent.module.css";
import tickts from "../../../../public/img/DashBoardNew/ticket.png";
import ticketsestados from "../../../../public/img/DashBoardNew/consultarticket.png" ; 
import Histoeial from "../../../../public/img/DashBoardNew/historial.png";


const DashBoardAgent = () => {
    const navigate = useNavigate(); // Hook para redirección
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
        {/* Tarjetas más importantes */}
        <Cards
          tamanoImagen={{ height: "245", width: "180" }}
          nombre={"Asignar tickets"}
          imagen={tickts}
          redireccion={"/crearAvanceYListarTickets"}
        />
       
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial de Tickets"}
          imagen={Histoeial}
          redireccion={"/verhistoria"}
        />

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Consultar tickets por estados"}
          imagen={ticketsestados}
          redireccion={"/estadosTickts-admin"}
        />
     </div>
          
        </>
      );
}

export default DashBoardAgent