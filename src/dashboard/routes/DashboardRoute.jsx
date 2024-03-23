import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard"

export const DashboardRoute = () => {
  return (
    <>
      <h1>Dashboard Header</h1>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </>
  )
}
