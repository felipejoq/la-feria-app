import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage.jsx"
import {MyPostPage} from "../pages/MyPostPage.jsx";

export const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/my-posts" element={<MyPostPage />} />
      </Routes>
    </>
  )
}
