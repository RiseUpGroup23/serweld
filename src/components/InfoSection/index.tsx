import React from 'react';
import './infoSection.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const InfoSection: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#empresa') {
            const element = document.getElementById('empresa');
            if (element) {
            window.scrollTo({
                top: element.offsetTop - 48, // 3rem = 48px
                behavior: 'smooth'
            });
            }
        }
    }, [location]);

    return (
        <div className="section-cont">
            <div className="dataFloatInfo">
                <div className="dFloatItem">
                    <span className="dFloatData">
                        +5.000
                    </span>
                    <span className="dFloatText">
                        proyectos ejecutados en la región
                    </span>
                </div>

                <div className="dFloatItem">
                    <span className="dFloatData">
                        Desde 2019
                    </span>
                    <span className="dFloatText">
                        brindando soluciones para la industria
                    </span>
                </div>

                <div className="dFloatItem">
                    <span className="dFloatData">
                        +10.000
                    </span>
                    <span className="dFloatText">
                        pulgadas soldadas
                    </span>
                </div>
            </div>

            <div id='empresa' className="section-information">
                <span className="companyTitle">
                    LA EMPRESA
                </span>
                <div className="companyInfoSection">
                    <div className="companyText">
                        <span>
                            <strong>Serweld</strong> nació como una
                            empresa dedicada a <strong> brindar
                                soluciones a la industria</strong> en el
                            año 2019, con la convicción de
                            que la clave del éxito viene de la
                            mano con <strong> brindar el servicio más
                                eficaz del mercado.</strong>
                        </span>

                        <span>
                            Tanto la construcción como el
                            mantenimiento de plantas industriales requieren de
                            <strong> servicios técnicos específicos</strong> que cumplan con los mas
                            <strong> exigentes controles de calidad.</strong>
                        </span>

                        <span>
                            Los servicios que brinda
                            <strong> Serweld, cumplen con todos los
                                requisitos</strong> y cubren todo el
                            espectro de <strong>necesidades de la
                                industria.</strong>
                        </span>
                    </div>
                    <div className="companyImage">
                        <img src="/image-circular.png" alt="image-circular" />
                    </div>
                </div>
            </div>

            <div className="cardsContainer">
                <div className="blueCard">
                    <div className="cardImage">
                        <img src="/imageMision.png" alt="imageMision" />
                    </div>
                    <span>MISIÓN</span>
                    <p>
                        Poner en manos de las industrias
                        una empresa encargada de
                        brindar servicios mas eficientes, comprometidos con la excelencia en cada proceso.
                    </p>
                </div>

                <div className="blueCard">
                    <div className="cardImage">
                        <img src="/imageVision.png" alt="imageVision" />
                    </div>
                    <span>VISIÓN</span>
                    <p>
                        Desarrollar nuestro trabajo y
                        brindar soluciones a nuestros
                        clientes para lograr
                        posicionarnos con los mejores
                        estándares de servicios.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;