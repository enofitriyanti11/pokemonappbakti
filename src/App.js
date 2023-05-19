import React from "react";
import "./index.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "./routes/Pokemon";
import Poke from "./routes/Poke";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import Detail from "./routes/Detail";
import { isLoggedIn } from './service/login';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={isLoggedIn() ? <Pokemon /> : <Navigate to="/" />}  />
          <Route path="/poke" element={isLoggedIn() ? <Poke /> : <Navigate to="/" />}  />
          <Route path="/detail/:name" element={<Detail />} />
          <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
