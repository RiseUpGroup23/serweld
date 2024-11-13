import React from 'react';
import { Route, Routes } from "react-router-dom"
import './index.css';
import Home from './views/Home';
import AllProyects from './views/AllProyects';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<AllProyects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
