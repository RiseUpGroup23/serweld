import React from 'react';
import "./index.css"
import Header from './components/Header';
import Carrousel from './components/Carrousel';
import InfoSection from './components/InfoSection';
import CustomersSection from './components/CustomersSection';


function App() {
  return (
    <div className='appContainer'>
      <Header />
      <Carrousel />
      <InfoSection />
      <CustomersSection />
    </div>
  );
}

export default App;
