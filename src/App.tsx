import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Private from "./screens/Private";
import PublicView from "./screens/PublicView";
import Admin from "./screens/Private/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/helpdesk" />} />
        <Route path={"/helpdesk/*"} element={<PublicView />} />
        <Route path={"/admin/*"} element={<Private />} />

        <Route path={"/admin"} element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
