import { CategoriesBar } from "./components/layout/CategoriesBar";
import { MainLayout } from "./components/layout/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MainVideoGrid } from "./components/layout/MainVideoGrid";

export default function App() {
  return (
    <Router>
      <Routes>

      <Route  path="/" 
              element={     
                <MainLayout>
                  <MainVideoGrid />
                </MainLayout>
              } 
      /> {/* Route 1 - Home Screen */} 

      <Route  path="/auth"
              element={
                <MainLayout>

                </MainLayout>
              }
      />

      <Route  path="/search"
              element={
                <MainLayout>
                  <h1>Search Results</h1>
                </MainLayout>
              }
      />

      <Route  path="*"
              element={
                <Navigate to="/" replace />
              }
      /> {/* Default route to redirect invalid url */}

      </Routes>
    </Router>
  )
}