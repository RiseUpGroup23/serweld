import React from 'react';
import Carrousel from '../components/Carrousel';
import InfoSection from '../components/InfoSection';
import CustomersSection from '../components/Customers';
import Proyects from '../components/Proyects';

const Home: React.FC = () => {
    return (
        <>
            <Carrousel />
            <InfoSection />
            <CustomersSection />
            <Proyects />
        </>
    );
};

export default Home;