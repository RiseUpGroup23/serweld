import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './proyect-detail.css';
import proyects from './proyects';
import Slider from 'react-slick';

var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
    className: "carrouselDetail"
};

const ProyectDetail: React.FC = () => {
    const location = useLocation()
    const proyectName = location.pathname.split("/")[2];
    const proyect = proyects.piping.find((proyect: any) => proyect.link === `/${proyectName}`) || proyects.mecanizados.find((proyect: any) => proyect.link === `/${proyectName}`)

    return (
        <div className='allProyects'>
            <div className="section-cont">
                <div className="section-information">
                    <Link to="#" onClick={() => window.history.back()} className="button-swd back">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                        Volver
                    </Link>
                    <span className="companyTitle">{proyect?.proyecto}</span>
                    <div className="imageDetail">
                        <img src={`../${proyect?.images.main}`} alt={proyect?.proyecto} />
                        <span>
                            {proyect?.cliente} - {proyect?.locacion}
                        </span>
                    </div>
                    <div className="description">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: proyect?.descripcion?.replace(/\n/g, '<br />') ?? proyect?.detalles?.replace(/\n/g, '<br />') ?? ""
                            }}
                        ></p>
                    </div>
                    {proyect?.pasoPaso?.length &&
                        <>
                            <span className="companyTitle">PASO A PASO</span>
                            {proyect.pasoPaso.map((paso: any, index: number) => (
                                <div key={`paso-${index}`} className="stepsContainer">
                                    <div className="stepInfo">
                                        <img src={`../${paso.imagen[0]}`} alt={`paso-img0-${index}`} />
                                        <p>{paso.descripcion[0]}</p>
                                    </div>
                                    <p className="stepNumber">{paso.paso}</p>
                                    <div className="stepInfo">
                                        <img src={`../${paso.imagen[1]}`} alt={`paso-img1-${index}`} />
                                        <p>{paso.descripcion[1]}</p>
                                    </div>
                                </div>)
                            )}
                        </>
                    }

                    {proyect?.images?.extras && proyect.images.extras.length > 0 &&
                        <>
                            <span className="companyTitle">GALERÍA DE FOTOS</span>
                            <div className="detailSliderCont">
                                <Slider {...settings}>
                                    {proyect.images.extras.map((img: string, index: number) => (
                                        <div key={`img-${index}`} className="detailSliderImg">
                                            <img className="detailSliderImg" src={`../${img}`} alt={`Slider${index}`} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProyectDetail;