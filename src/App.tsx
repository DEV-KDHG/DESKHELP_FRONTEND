import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./screens/Auth/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
