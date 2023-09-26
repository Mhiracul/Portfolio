import React from "react";
import { CV } from "../assets";

const About = ({ isSidebarExpanded }) => {
  const sectionClass = isSidebarExpanded;

  return (
    <section id="about" className={sectionClass}>
      <div className="bg-[#191C1F] ">
        <div className=" py-16 md:px-20 px-6 ">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative flex-col row-auto"
          >
            <h1 className="text-4xl lg:text-9xl md:text-8xl font-bold text-[#212427] text-center">
              ABOUT ME
            </h1>
            <h2 className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold  text-white text-center">
              <span className="border-b-2 border-[#5100EE] pb-1 mb-1 text-center">
                Know Me More
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 py-8 md:py-16 md:text-center xl:text-left">
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="row gy-5 "
            >
              <h1 className="text-white text-xl md:text-3xl font-bold">
                {" "}
                I'm{" "}
                <span className="text-[#5100EE] font-medium">
                  Miracle Okeke,
                </span>{" "}
                a Web Developer
              </h1>
              <p
                className="text-[#FFFFFF80] leading-6 mt-4"
                style={{ fontSize: "15px" }}
              >
                Welcome to my world of web development! I'm Miracle Okeke, a
                passionate and skilled Web Developer. My mission is to help you
                build a strong and impactful online presence for your business
                without breaking the bank.
              </p>
              <p
                className="text-[#FFFFFF80] mt-4 leading-6"
                style={{ fontSize: "15px" }}
              >
                Our commitment to excellence is unwavering. We understand that
                your time and budget are valuable, which is why we always strive
                to deliver projects that meet your specific requirements
                promptly.
              </p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="flex flex-col row gy-5 list-none text-left md:w-96"
            >
              <div className="md:col-span-7 md:col-start-2 xl:col-span-8 xl:col-start-2 md:text-left ">
                <li
                  className="text-white border-b border-gray-300 pb-2"
                  style={{ borderBottom: "1px solid #FAFAFA1E" }}
                >
                  <span className="font-bold mr-3"> Name: </span> Miracle Okeke
                </li>
                <li
                  className="text-[#5100EE] border-b-2 border-gray-700 mt-4 pb-2"
                  style={{ borderBottom: "1px solid #FAFAFA1E" }}
                >
                  <span className=" text-white font-bold mr-3"> Email: </span>{" "}
                  mokeke185@gmail.com
                </li>
                <li
                  className="text-white border-b-2 border-gray-700 mt-4 pb-2"
                  style={{ borderBottom: "1px solid #FAFAFA1E" }}
                >
                  <span className="font-bold mr-3"> Age: </span> 24
                </li>
                <li className="text-white  mb-2">
                  <span className="font-bold mr-3"> From: </span> Ajah-Lagos,
                  Nigeria
                </li>
                <button
                  className="bg-[#5100EE] rounded-full md:w-52 w-32 h-12 font-bold text-white mt-4 outline-none"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = CV;
                    link.download = "Miracle Okeke.pdf";
                    link.click();
                  }}
                >
                  Download Cv
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1 gap-8 items-center w-full text-center py-16 ">
            <div className=" ">
              <h1 className="md:text-4xl text-2xl text-[#FFFFFF80] font-bold">
                2+
              </h1>
              <p className="text-white font-medium text-sm">Years Experience</p>
            </div>
            <div className="">
              <h1 className="md:text-4xl text-2xl text-[#FFFFFF80] font-bold">
                4+
              </h1>
              <p className="text-white font-medium text-sm">Happy Clients</p>
            </div>
            <div className="">
              <h1 className="md:text-4xl text-2xl text-[#FFFFFF80] font-bold">
                14+
              </h1>
              <p className="text-white font-medium text-sm">Project Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
