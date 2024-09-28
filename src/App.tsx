import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./screens/Auth/login";
import Signup from "./screens/Auth/singup";
import Private from "./screens/Private";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path={"/login"} element={<Login />} />
        <Route path={"sign_up"} element={<Signup/>}/>
        <Route path={"/admin/*"} element={<Private/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
