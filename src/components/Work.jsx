import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { work1 } from "../assets";
import { work2 } from "../assets";
import { work3 } from "../assets";
import { work4 } from "../assets";
import { work5 } from "../assets";
import { work6 } from "../assets";

const Work = () => {
  return (
    <div className="bg-[#272C31] py-16 md:px-20 px-6  w-full">
      <div>
        <div className="relative flex-col text-center">
          <h1 className="md:text-9xl text-5xl font-bold text-[#212427]">
            PORTFOLIO
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-3xl font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
              My Work
            </span>
          </h2>
        </div>
        <div>
          <div className="grid xl:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10 py-16">
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work1} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">MIRAC</p>
                  <p className="text-[#FFF] text-sm font-medium">
                    E-Commerce website
                  </p>

                  <a href="https://github.com/Mhiracul/Shopping-cart">
                    <BsGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work2} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">E-SOLAR</p>
                  <p className="text-[#fff] text-sm font-medium">
                    Solar Web App
                  </p>
                  <div className="flex gap-3">
                    <a href="https://github.com/Mhiracul/E_SOLARR">
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work3} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">TRANSITFLOW</p>
                  <p className="text-[#FFF] text-sm font-medium">
                    Logistic Webiste
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://transit-f.netlify.app/"
                      className="hover:text-[#5100EE]"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/TRANS"
                      className="hover:text-[#5100EE]"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work4} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">FINFLOW</p>
                  <p className="text-[#FFF] text-sm font-medium">
                    Banking Website
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://finflow.netlify.app/"
                      className="hover:text-[#5100EE]"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/Banking_Site"
                      className="hover:text-[#5100EE]"
                    >
                      <BsGithub size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work5} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">PENDORA</p>
                  <p className="text-[#FFF] text-sm font-medium">
                    Investment website
                  </p>
                  <a
                    href="https://pendoraventures.com"
                    className="hover:text-[#5100EE]"
                  >
                    <BsEye size={30} />
                  </a>
                </div>
              </div>
            </div>

            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work6} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">TRI-MOVIES</p>
                  <p className="text-[#FFF] text-sm font-medium">
                    Movie Discovery Web App
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://tri-movies.netlify.app/"
                      className="hover:text-[#5100EE]"
                    >
                      <BsEye size={30} />
                    </a>
                    <a
                      href="https://github.com/Mhiracul/ZuriMovie"
                      className="hover:text-[#5100EE]"
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
