import { Navigate } from 'react-router-dom';
import {useContext} from "react";
import {GlobalContext} from "../contexts/global/GlobalContext.js";

export const PrivateRoute = ({ children }) => {

  const {logged} = useContext(GlobalContext);

  return (logged) // logged
    ? children
    : <Navigate to="/auth/login" />
}
