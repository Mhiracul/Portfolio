import React from "react";

const Banner = () => {
  return (
    <div
      role="banner"
      className="w-full flex justify-center items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('https://harnishdesign.net/demo/react/simone/demo/images/intro-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="my-auto ">
        <div className="row-auto flex-wrap">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center col-span-12 "
          >
            <h1 className="text-white font-medium text-2xl">Welcome</h1>
            <h1 className="text-white font-bold md:text-6xl text-3xl mt-5">
              I'm a FullStack Developer
            </h1>
            <p className="text-[#DCDCDC] md:text-2xl text-xl mt-5">
              based in Ajah-Lagos, Nigeria.
            </p>
            <button className="border-2 rounded-full text-white px-4 py-2 bg-transparent w-32 border-[#5100EE] mt-4">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
