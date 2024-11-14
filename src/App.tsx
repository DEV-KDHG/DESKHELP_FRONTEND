import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Private from "./screens/Private";
import PublicView from "./screens/PublicView";
import Admin from "./screens/Private/Admin";
import Area from "./screens/Private/Area";
import Status from "./screens/Private/status";
import Category from "./screens/Private/category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/helpdesk" />} />
        <Route path={"/helpdesk/*"} element={<PublicView />} />
        <Route path={"/admin/*"} element={<Private />} />
        <Route path={"/area"} element={<Area />} />
        <Route path={"/estado"} element={<Status />} />
        <Route path={"/categoria"} element={<Category />} />


        <Route path={"/admin"} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
