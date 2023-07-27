import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import cards from "../assets/cards";
const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="testimonial"
      className="bg-[#191C1F] py-16 md:px-20 px-6 w-full h-full"
    >
      <div>
        <div className="relative flex-col">
          <h1 className="md:text-9xl text-4xl font-bold text-[#212427]">
            TESTIMONIAL
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-3xl font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
              Review
            </span>
          </h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <Slider {...settings}>
          {cards.map((cards) => (
            <div key={cards.id} className="px-6">
              <div className="bg-[#0E1013] rounded-lg shadow-lg p-6 flex-col py-16">
                <div className="flex items-center text-left">
                  <img
                    src={cards.image}
                    alt=""
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-white">{cards.name}</h3>
                    <p className="text-[#758285]">Senior Android Engineer</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#FFFFFF] text-left mt-4 font-medium">
                    {cards.testimonial}
                  </p>
                </div>
                <div className="flex gap-2 mt-3">
                  {cards.star}
                  {cards.star}
                  {cards.star}
                  {cards.star}
                  {cards.star}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
