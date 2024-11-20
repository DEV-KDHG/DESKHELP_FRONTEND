import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Private from "./screens/Private";
import PublicView from "./screens/PublicView";
import Admin from "./screens/Private/Admin";
import Area from "./screens/Private/Area";
import Status from "./screens/Private/status";
import { Priorities } from "./screens";
import Category from "./screens/Private/category";
import DashboardAdmin from "./screens/Private/dashboardAdmin";
import CreateTicket from "./components/uiTickets/uiCreate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/helpdesk" />} />
        <Route path={"/helpdesk/*"} element={<PublicView />} />
        <Route path={"/admin/*"} element={<Private />} />
        <Route path={"/area"} element={<Area />} />
        <Route path={"/dashboard_admin"} element={<DashboardAdmin/>}/>
        <Route path={"/estado"} element={<Status />} />
        <Route path={"/priorities"} element={<Priorities />} />
        <Route path={"/categoria"} element={<Category />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/ticket"} element={<CreateTicket />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
