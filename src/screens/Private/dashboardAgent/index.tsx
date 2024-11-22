import Cards from "../../../components/ui/Cards";
import SideBarComponent from "../../../components/ui/SideBar";
import style from "./dashboard.module.css";
import tickts from "../../../../public/img/DashBoardNew/ticket.png";

import admiCuenta from "../../../../public/img/DashBoardNew/administracion de cuenta.png";

import Usuario from "../../../../public/img/DashBoardNew/usuarios en sesion.png";
import ticketsestados from "../../../../public/img/DashBoardNew/consultarticket.png" ; 


import Histoeial from "../../../../public/img/DashBoardNew/historial.png";
import SearchBoxComponent from "../../../components/ui/searchBox";

const DashboardAgent = () => {
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
          nombre={"Asignar tickets"}
          imagen={tickts}
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
          nombre={"Historial de Tickets"}
          imagen={Histoeial}
          redireccion={"/"}
        />

        {/* Tarjetas de administración de categorías y prioridades */}
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Consultar tickets por estados"}
          imagen={ticketsestados}
          redireccion={"/"}
        />
    
      
      </div>
    </>
  );
};

export default DashboardAgent;
