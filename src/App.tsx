import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Private from "./screens/Private";
import PublicView from "./screens/PublicView";
import Admin from "./screens/Private/Admin";
import Area from "./screens/Private/Area";
import Status from "./screens/Private/status";
import { Priorities } from "./screens";
import Category from "./screens/Private/category";
import DashboardAdmin from "./screens/Private/dashboardAdmin";
import TicketsAdmin from "./screens/Private/TicketsAdmin";
import TicketList from "./components/uiTickets/ticketsListUser";
import SeeHistory from "./components/uiTickets/seeHistory";
import ChangesPassword from "./components/ui/changesPassword";
import { ClosedTicketsInSession } from "./components";
import OpenTicketsInSession from "./components/uiTickets/openTicketsInSession";
import ListTicketsInProgressInSession from "./components/uiTickets/InProgress";
import DashBoardAgent from "./screens/Private/dashBoardAgent";
import DashBoardUser from "./screens/Private/dashBoardUsuer";
import AssignTicketComponent from "./components/uiTickets/ticketsAssing";
import SeeHistoryUser from "./components/uiTickets/seeHistoryUser";
import TicketListAgente from "./components/uiTickets/ticketsListAgente";
import ListTicketsInProgressInSessionAgent from "./components/uiTickets/InProgressAgent";
import ClosedTicketsInSessionAgent from "./components/uiTickets/closedTicketsInSessionAgent";
import OpenTicketsInSessionAgent from "./components/uiTickets/openTicketsInSessionAgent";
import CountStadisticChart from "./components/uiTickets/countStadistic";
import TicketListAgemt from "./components/uiTickets/ticketsListAGent";
import SeeHistoryAgent from "./components/uiTickets/seeHistoryAgent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/helpdesk" />} />
        <Route path={"/helpdesk/*"} element={<PublicView />} />
        <Route path={"/admin/*"} element={<Private />} />
        <Route path={"/verhistoria"} element={<SeeHistory />} />
        <Route path={"/verhistoriaUser"} element={<SeeHistoryUser />} />
        <Route path={"/verhistoriaAgentes"} element={<SeeHistoryAgent/>} />
        
        <Route path={"/crearAvanceYListarTickets"} element={<TicketList />} />
        <Route path={"/area"} element={<Area />} />
        <Route path={"/dashboard_admin"} element={<DashboardAdmin />} />
        <Route path={"/estado"} element={<Status />} />
        <Route path={"/priorities"} element={<Priorities />} />
        <Route path={"/categoria"} element={<Category />} />
        <Route path={"/cambiaContraseña"} element={<ChangesPassword />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/estadosTickts-admin"} element={<TicketsAdmin />} />
        <Route path={"/estadisitica"} element={<CountStadisticChart />} />
        <Route path={"/ticketsCerrado"} element={<ClosedTicketsInSession />} />
        <Route path={"/ticketsAbierto"} element={<OpenTicketsInSession />} />
        <Route path={"/dashboard_agente"} element={<DashBoardAgent />} />
        <Route path={"/dashboard_user"} element={<DashBoardUser />} />
        <Route path={"/asignar"} element={<AssignTicketComponent />} />
        <Route
          path={"/crearAvanceYListarTicketsAgente"}
          element={<TicketListAgemt/>}
        />
        <Route path={"/ticketsAbiertoAgent"} element={<OpenTicketsInSessionAgent />} />



        <Route path={"/ticketsCerradoAgent"} element={<ClosedTicketsInSessionAgent />} />



        <Route
          path={"/ticketesEnProgreso"}
          element={<ListTicketsInProgressInSession />}
        />  <Route
        path={"/ticketesEnProgresoAgente"}
        element={<ListTicketsInProgressInSessionAgent />}
      />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
