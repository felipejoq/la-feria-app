import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ArticlePage } from "../pages/ArticlePage"

export const HomeRoutes = () => {
  return (
    <>
      <h1>Header Home Page</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </>
  )
}
