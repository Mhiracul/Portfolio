import React from "react";
import { BsEye } from "react-icons/bs";
import { work1 } from "../assets";
import { work2 } from "../assets";
import { work3 } from "../assets";

const Work = () => {
  return (
    <div
      className="bg-[#272C31] py-16 md:px-20 px-6 "
      style={{ width: "100%", float: "right" }}
    >
      <div>
        <div className="relative flex-col">
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
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">MIRAC</p>
                  <p className="text-[#5100EE] text-lg font-bold">E-COMMERCE</p>
                  <a href="https://github.com/Mhiracul/Shopping-cart">
                    <BsEye size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work2} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">E-SOLAR</p>
                  <p className="text-[#fff64a] text-lg font-bold">
                    SOLAR WEB APP
                  </p>
                  <a href="https://github.com/Mhiracul/E_SOLARR">
                    <BsEye size={30} />
                  </a>
                </div>
              </div>
            </div>
            <div class="relative rounded-lg border border-[#5100EE] bg-white px-6 py-8">
              <img src={work3} class="w-full" alt="" className="rounded-lg" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-80 rounded-lg  transition duration-300">
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-white text-lg font-bold">TRANSITFLOW</p>
                  <p className="text-[#5100EE] text-lg font-bold">LOGISTICS</p>
                  <a href="https://github.com/Mhiracul/TRANS">
                    <BsEye size={30} />
                  </a>
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
