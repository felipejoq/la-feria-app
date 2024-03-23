import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginPage } from '../auth/pages/LoginPage';
import { HomeRoutes } from '../home/routes/HomeRoutes';
import { DashboardRoute } from '../dashboard/routes/DashboardRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="/*" element={
          <PublicRoute>
            <Routes>
              <Route path="login/*" element={<LoginPage />} />
              <Route path="/*" element={<HomeRoutes />} />
            </Routes>
          </PublicRoute>
        }
        />

        <Route path="dashboard/*" element={
          <PrivateRoute>
            <DashboardRoute />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
