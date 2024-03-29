import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage.jsx"

export const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </>
  )
}
