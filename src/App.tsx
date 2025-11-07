/* Este es el componente principal del proyecto, es el que se renderiza en el navegador
  Da la estructura de la UI
*/
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Esto significa que estamos importando el componente BrowserRouter y lo estamos renombrando como Router
import './App.css';

import LandingPage from './pages/Landing /LandingPage';
import ArtistasPage from "./pages/Artistas /ArtistasPage";
import ColeccionesPage from "./pages/Colecciones /ColeccionesPage";
import GaleriaPage from "./pages/Galeria/GaleriaPage";
import NosotrosPage from "./pages/Nosotros/NosotrosPage";
import PinturasPage from "./pages/Pinturas /PinturasPage";

import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Gallery from './pages/Galeria/GaleriaPage';
/*
  Si lo que queremos es que creemos un menu de opciones, lo que tenemos que hacer es:
  1. Crear un componente para el menu
  2. Crear un componente para cada opcion del menu
  3. Crear un componente para el contenido de cada opcion del menu
  4. Crear un componente para el pie de pagina
  5. Crear un componente para el encabezado
  6. Crear un componente para el pie de pagina
  function App() {

  Para realizarlo en este documento, lo que tenemos que hacer es importar el componente 
  desde otro archivo que tendra la logica de cada opcion del menu.
*/
const App: React.FC = () =>  {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/pinturas" element={<PinturasPage />}/>
        <Route path="/artistas" element={<ArtistasPage /> }/>
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
      <Navbar/>
      <LandingPage/>
    </Router>
  );
}

export default App;
