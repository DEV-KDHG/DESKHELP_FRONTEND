import Cards from "../../../components/ui/Cards";
import SideBarComponent from "../../../components/ui/SideBar";
import style from "./dashboard.module.css";
import admiAreas from "../../../../public/imgDashboard/administracion de areas.png";
import admiStates from "../../../../public/imgDashboard/estado.png";
import admiCategories from "../../../../public/imgDashboard/categoria.png";
import admiAccounts from "../../../../public/imgDashboard/administracion de cuenta.png";
import estadistica from "../../../../public/imgDashboard/estadistica.png";
import tickts from "../../../../public/imgDashboard/ticket.png";
import admiPriorities from "../../../../public/imgDashboard/alerta.png";
import SearchBoxComponent from "../../../components/ui/searchBox";

const DashboardAdmin = () => {
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
          nombre={"Administración de cuentas"}
          imagen={admiAccounts}
          redireccion={"/admin"}
        />
        <Cards
          tamanoImagen={{ height: "245", width: "250" }}
          nombre={"Estadística"}
          imagen={estadistica}
          redireccion={"/"}
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
          imagen={tickts}
          redireccion={"/dashboard_admin"}
        />
      </div>
    </>
  );
};

export default DashboardAdmin;
