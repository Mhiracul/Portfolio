import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div id="testimonial" className="bg-[#191C1F]">
      <div className="py-16 md:px-20 px-6">
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative flex-col text-center"
          >
            <h1 className="md:text-8xl lg:text-9xl text-2xl font-bold text-[#212427]">
              TESTIMONIAL
            </h1>
            <h2 className="absolute inset-0 flex items-center justify-center  lg:text-4xl text-xl font-bold  text-white text-center">
              <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
                Review
              </span>
            </h2>
          </div>
        </div>
        <div className="container mx-auto  py-16">
          <Slider {...settings}>
            {cards.map((cards) => (
              <div key={cards.id} className="px-2">
                <div className="bg-[#0E1013] rounded-lg shadow-lg p-6 flex-col py-16">
                  <div className="flex md:flex-row flex-col items-center md:text-left text-center">
                    <img
                      src={cards.image}
                      alt=""
                      className="w-14 h-14 object-cover  rounded-full mr-4"
                    />
                    <div className="md:text-sm text-xs">
                      <h3 className="font-bold text-white">{cards.name}</h3>
                      <p className="text-[#758285]">{cards.title}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#FFFFFF] md:text-sm text-xs md:text-left text-center mt-4 font-medium">
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
    </div>
  );
};

export default CardSlider;
