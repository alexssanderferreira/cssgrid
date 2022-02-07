import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Destaques from "./components/Destaques";
import Footer from "./components/Footer";
import Populares from "./components/Populares";

function App() {
  return (
    <div className="page">
      <header className="cabecalho"><Header/></header>
      <main className="conteudo"><Destaques/><Populares/></main>
      <footer className="rodape"><Footer/></footer>
    </div>
  );
}

export default App;
