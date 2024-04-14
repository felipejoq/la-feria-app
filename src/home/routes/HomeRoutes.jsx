import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ArticlePage } from "../pages/ArticlePage"
import {ProfilePage} from "../pages/ProfilePage.jsx";
import {SearchPage} from "../pages/SearchPage.jsx";

export const HomeRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
        <Route path="/article/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}
