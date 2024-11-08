import React from "react";
import Slider from "react-slick";
import "./carrousel.css"

export default function Carrousel() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
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
                </div>
                <div className="sliderImg">
                    <img className="sliderImg" src="/slider/fondo2.jpg" alt="Slider2" />
                </div>
                <div className="sliderImg">
                    <img className="sliderImg" src="/slider/fondo3.jpg" alt="Slider3" />
                </div>
            </Slider>
        </div>
    );
}