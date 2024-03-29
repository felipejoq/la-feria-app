import {Route, Routes} from 'react-router-dom';

import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

import {HomeRoutes} from '../home/routes/HomeRoutes';
import {DashboardRoute} from '../dashboard/routes/DashboardRoute.jsx';
import {Header} from "../components/commons/header/Header.jsx";
import {Footer} from "../components/commons/footer/Footer.jsx";
import {AuthRoute} from "../auth/routes/AuthRoute.jsx";

export const AppRouter = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/*" element={<HomeRoutes/>}/>
        <Route path="auth/*" element={
          <PublicRoute>
            <AuthRoute />
          </PublicRoute>
        }
        />
        <Route path="dashboard/*" element={
          <PrivateRoute>
            <DashboardRoute/>
          </PrivateRoute>
        }/>
      </Routes>
      <Footer/>
    </>
  )
}
