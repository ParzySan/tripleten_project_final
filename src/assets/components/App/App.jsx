import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from "../../../../public/poke.png";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/header.jsx";
import Footer from "../Footer/footer.jsx";
import Main from "../Main/main.jsx";
import About from "../About/about.jsx";
import Pokemon from "../../../Pages/pokemon.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
