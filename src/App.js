import React from "react";
import "./index.css";
import Home from "./routes/Home";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Pokemon from "./routes/Pokemon";
import Poke from "./routes/Poke";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/poke" element={<Poke />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
