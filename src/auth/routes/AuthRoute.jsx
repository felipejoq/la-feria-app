import {Route, Routes} from "react-router-dom";
import {LoginPage} from "../pages/LoginPage.jsx";
import {RegisterPage} from "../pages/RegisterPage.jsx";

export const AuthRoute = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={<LoginPage/>}/>
        <Route path="register/*" element={<RegisterPage/>}/>
      </Routes>
    </>
  );
};