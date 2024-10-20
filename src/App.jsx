import { CategoriesBar } from "./components/layout/CategoriesBar";
import { MainLayout } from "./components/layout/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { MainVideoGrid } from "./components/layout/MainVideoGrid";
import { useSelector } from "react-redux";
import { LoginScreen } from "./components/LoginScreen";
import { useEffect } from "react";


function ProtectedRoutes({ children }){
  const navigate = useNavigate();
  const {accessToken, loading} = useSelector(state => state.auth);
  
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, history]);

  return children;
}
export default function App() {  
  return (
    <Router>
      <Routes>

      <Route  path="/" 
              element={ 
                <ProtectedRoutes>
                  <MainLayout>
                    <MainVideoGrid />
                  </MainLayout>
                </ProtectedRoutes>
              } 
      /> {/* Route 1 - Home Screen */} 

      <Route  path="/auth"
              element={
                <MainLayout>
                  <LoginScreen />
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