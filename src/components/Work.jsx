import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { work1 } from "../assets";
import { work2 } from "../assets";
import { work3 } from "../assets";
import { work4 } from "../assets";
import { work5 } from "../assets";
import { work6 } from "../assets";
import { work7 } from "../assets";

const Work = () => {
  return (
    <div className="bg-[#272C31]  ">
      <div className="py-16 md:px-20 px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="relative flex-col text-center"
        >
          <h1 className="lg:text-9xl md:text-8xl text-4xl font-bold text-[#212427]">
            PORTFOLIO
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-sm font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
              My Work
            </span>
          </h2>
        </div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-16"
          >
            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work1} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-sm font-bold">
                    MIRAC
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-medium">
                    E-Commerce website
                  </p>

                  <a
                    href="https://github.com/Mhiracul/Shopping-cart"
                    className="hover:text-[#5100EE] text-white"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work2} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-sm font-bold">
                    E-SOLAR
                  </p>
                  <p className="text-[#fff] md:text-sm text-center text-xs font-medium">
                    Solar Web App
                  </p>
                  <a
                    href="https://github.com/Mhiracul/E_SOLARR"
                    className="hover:text-[#5100EE] text-white"
                  >
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work3} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-smfont-bold">
                    TRANSITFLOW
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-medium">
                    Logistic Webiste
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://transit-f.netlify.app/"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/TRANS"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work4} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white tmd:text-lg text-sm font-bold">
                    FINFLOW
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-medium">
                    Banking Website
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://finflow.netlify.app/"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/Banking_Site"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work5} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-sm font-bold">
                    PENDORA
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-medium">
                    Investment website
                  </p>
                  <a
                    href="https://pendoraventures.com"
                    className="hover:text-[#5100EE] text-white"
                  >
                    <BsEye size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work6} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-sm font-bold">
                    TRI-MOVIES
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-medium">
                    Movie Discovery Web App
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://tri-movies.netlify.app/"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/ZuriMovie"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-[#5100EE] bg-white px-3 py-4">
              <img src={work7} alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white md:text-lg text-sm font-bold">
                    ARTESSENCE
                  </p>
                  <p className="text-[#FFF] md:text-sm text-center text-xs font-normal">
                    Drag and Drop Image Gallery
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://tiny-moxie-61180e.netlify.app/"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/Artessence"
                      className="hover:text-[#5100EE] text-white"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
