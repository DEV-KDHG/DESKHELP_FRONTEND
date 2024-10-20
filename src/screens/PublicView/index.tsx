import { Route, Routes } from "react-router-dom";
import Login from "./Auth/login";

const PublicView = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
          </Routes>
  );
};

export default PublicView;
