import React, { useState } from 'react';
import './proyects.css';
import proyects from './proyects';
import { Link, useLocation } from 'react-router-dom';

const Proyects: React.FC = () => {
    const location = useLocation()
    const seeAll = location.pathname === "/proyectos";
    const [selectedTab, setSelectedTab] = useState("piping")

    return (
        <div className="section-cont">
            <div className="section-information">
                {seeAll && <Link to={"/"} className="button-swd back">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                    Volver
                </Link>}
                <span className="companyTitle">{seeAll ? "Nuestros servicios" : "NUESTROS PROYECTOS"}</span>
                <div className="tabSelector">
                    <button className={`${selectedTab === "piping" ? "selected" : ""}`} onClick={() => setSelectedTab("piping")}>PIPING Y CALDERERIA</button>
                    <button className={`${selectedTab === "mecanizados" ? "selected" : ""}`} onClick={() => setSelectedTab("mecanizados")}>MECANIZADOS</button>
                </div>
                <div className="gridProyectos">
                    {proyects[selectedTab].slice(0, (seeAll ? proyects[selectedTab].length : 4)).map((proyect: any, index: number) => (
                        <Link
                            key={index}
                            to={`/proyectos${proyect.link}`}
                        >
                            <div
                                className={`proyect`}
                            >
                                <img className="proyectImage" src={proyect?.images?.main} alt="" />
                                <div className="hoverInfo">
                                    <span className="proyectTitle">{proyect.proyecto}</span>
                                    <span className="proyectDetails">{proyect.detalles}</span>
                                    <span className="proyectLocation">{proyect.locacion}</span>
                                    <span className="proyectClient">{proyect.cliente}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {!seeAll && <Link to={"/proyectos"} className="button-swd">
                    Ver todos los proyectos
                </Link>}
            </div>
        </div>
    );
};

export default Proyects;
