import Cards from "../../../components/ui/Cards";
import SideBarComponent from "../../../components/ui/SideBar";
import style from "./dashboard.module.css";
import admiAreas from "../../../../public/imgDashboard/administracion de areas (1).png";
import admiStates from "../../../../public/imgDashboard/estado (1).png";
import admiCategories from "../../../../public/imgDashboard/categoria (1).png";
import admiAccounts from "../../../../public/imgDashboard/administracion de cuenta (1).png";
import estadistica from "../../../../public/imgDashboard/estadistica (1).png";
import admiPriorities from "../../../../public/imgDashboard/alerta (1).png";
import historial from "../../../../public/imgDashboard/historial.png";
import password from "../../../../public/imgDashboard/contraseña.png";
import TicketStatus from "../../../../public/imgDashboard/Ticket status  history.png";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
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
        {/* Tarjetas más importantes */}
        <Cards
          tamanoImagen={{ height: "245", width: "180" }}
          nombre={"Administración de cuentas"}
          imagen={admiAccounts}
          redireccion={"/admin"}
        />
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Estadística"}
          imagen={estadistica}
          redireccion={"/estadisitica"}
        />

        {/* Tarjetas de administración de áreas y estados */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Administración de áreas"}
          imagen={admiAreas}
          redireccion={"/area"}
        />
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Administración de estados"}
          imagen={admiStates}
          redireccion={"/estado"}
        />

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Administración de categorías"}
          imagen={admiCategories}
          redireccion={"/categoria"}
        />
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Administración de prioridades"}
          imagen={admiPriorities}
          redireccion={"/priorities"}
        />

        {/* Tarjeta de historial de tickets */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial de tickets"}
          imagen={historial}
          redireccion={"/verhistoria"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Cambio de contraseña"}
          imagen={password}
          redireccion={"/cambiaContraseña"}
        />

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial de estado tickets"}
          imagen={TicketStatus}
          redireccion={"/estadosTickts-admin"}
        />

<Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Asignar un ticket"}
          imagen={TicketStatus}
          redireccion={"/asignar"}
        />


      </div>
    </>
  );
};

export default DashboardAdmin;
