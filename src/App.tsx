import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./screens/Auth/login";
import Signup from "./screens/Auth/singup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path={"/login"} element={<Login />} />
        <Route path={"sign_up"} element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
