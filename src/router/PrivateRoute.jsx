import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {

  return (false) // logged
    ? children
    : <Navigate to="/login" />
}
