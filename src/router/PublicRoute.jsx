import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {

    return (true) // !logged
        ? children
        : <Navigate to="/" />
}
