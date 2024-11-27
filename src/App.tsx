import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom"
import './index.css';
import Home from './views/Home';
import AllProyects from './views/AllProyects';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import ProyectDetail from './components/Proyects/ProyectDetail';
import Contact from './components/Contact';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<AllProyects />} />
        <Route path="/proyectos/:nombreProyecto" element={<ProyectDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
