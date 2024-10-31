import React from 'react';
import "./index.css"
import Header from './components/Header';
import Carrousel from './components/Carrousel';


function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Carrousel />
    </div>
  );
}

export default App;
