import React from "react";
import Slider from "react-slick";
import "./carrousel.css"
import { Link } from "react-router-dom";

export default function Carrousel() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: "carrouselHome"
    };
    return (
        <div className="logoOverlay">
            <div className="floatInfo">
                <img className="logoImg" src="/logo192.png" alt="Logo" />
                <span className="logoText">SOLUCIONES PARA LA INDUSTRIA</span>
            </div>
            <Slider {...settings}>
                <div className="sliderImg">
                    <div className="sliderOverlay"></div>
                    <img className="sliderImg" src="/slider/fondo1.jpg" alt="Slider2" />
                    <Link to={"/proyectos/ampliacion-aero-enfriador"}>
                        <button className="proyectButton">IR AL PROYECTO</button>
                    </Link>
                </div>
                <div className="sliderImg">
                    <img className="sliderImg" src="/slider/fondo2.jpg" alt="Slider2" />
                    <Link to={"/proyectos/trampa-de-scraper"}>
                        <button className="proyectButton">IR AL PROYECTO</button>
                    </Link>
                </div>
                <div className="sliderImg">
                    <img className="sliderImg" src="/slider/fondo3.png" alt="Slider3" />
                    <Link to={"/proyectos/medias-canas"}>
                        <button className="proyectButton">IR AL PROYECTO</button>
                    </Link>
                </div>
            </Slider>
        </div>
    );
}