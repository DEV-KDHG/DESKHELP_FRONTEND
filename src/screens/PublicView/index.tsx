import { Route, Routes } from "react-router-dom";
import Login from "./Auth/login";
import Signup from "./Auth/singup";

const PublicView = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default PublicView;
