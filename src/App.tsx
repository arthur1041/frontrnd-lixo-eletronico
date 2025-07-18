import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import ProtectedRoute from "./pages/components/ProtectedRoute";
import authService from "./service/authService";
import { useState } from "react";
import { Perfil } from "./pages/Profile";
import Assistencias from "./pages/Assistencias";
import { PontosDeColeta } from "./pages/PontosDeColeta";
import { MinhasColetas } from "./pages/MinhasColetas";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authService.isLoggedIn()
  );

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/authenticated/home" replace />
          ) : (
            <Login onLogin={() => setIsAuthenticated(true)} />
          )
        }
      />
      <Route
        path="/signup"
        element={
          isAuthenticated ? (
            <Navigate to="/authenticated/home" replace />
          ) : (
            <SignUp />
          )
        }
      />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/authenticated/home" element={<Home />} />
        <Route path="/authenticated/empresas" element={<Assistencias />} />
        <Route path="/authenticated/coletas" element={<PontosDeColeta />} />
        <Route
          path="/authenticated/coletas-historico"
          element={<MinhasColetas />}
        />
        <Route path="/authenticated/profile" element={<Perfil />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
