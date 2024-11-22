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

import TicketList from "./components/uiTickets/ticketsList";
import SeeHistory from "./components/uiTickets/seeHistory";
import CountStadisticChart from "./components/uiTickets/countStadistic";
import ChangesPassword from "./components/ui/changesPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/helpdesk" />} />
        <Route path={"/helpdesk/*"} element={<PublicView />} />
        <Route path={"/admin/*"} element={<Private />} />
        <Route path={"/verhistoria"} element={<SeeHistory />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
