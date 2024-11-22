import Cards from "../../../components/ui/Cards";
import SideBarComponent from "../../../components/ui/SideBar";
import style from "./dashboard.module.css";
import tickets from "../../../../public/img/DashBoardNew/ticket.png";

import admiCuenta from "../../../../public/img/DashBoardNew/administracion de cuenta.png"; 

import Usuario from "../../../../public/img/DashBoardNew/usuarios en sesion.png";
import ticketsProces from "../../../../public/img/DashBoardNew/ticketsprocess.png";


import Histoeial from "../../../../public/img/DashBoardNew/historial.png";
import SearchBoxComponent from "../../../components/ui/searchBox";

const DashboardUser = () => {
  return (
    <>

<div className={style.search}>
<SearchBoxComponent  placeholder="Consultar un ticket ..."/>


</div>
      <div className={style.container_sidebar}>
        <SideBarComponent />
      </div>

      <div className={style.container_cards}>
        {/* Tarjetas más importantes */}
        <Cards
          tamanoImagen={{ height: "245", width: "180" }}
          nombre={"Administración de tickets"}
          imagen={tickets}
          redireccion={"/"}
        />
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Administracion de cuenta"}
          imagen={admiCuenta}
          redireccion={"/"}
        />

        {/* Tarjetas de administración de áreas y estados */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Usuario en sesión"}
          imagen={Usuario}
          redireccion={"/"}
        />
     

        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Tickets Abierto - proceso"}
          imagen={ticketsProces}
          redireccion={"/"}
        />

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Historial"}
          imagen={Histoeial}
          redireccion={"/"}
        />
       

      
      </div>
    </>
  );
};

export default DashboardUser;
