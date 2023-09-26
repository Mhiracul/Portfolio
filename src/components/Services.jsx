import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faPalette,
  faPencilRuler,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
const Services = () => {
  return (
    <div id="services" className="bg-[#272C31] py-16 md:px-20 px-6 w-full">
      <div>
        <div className="relative flex-col text-center">
          <h1 className="lg:text-9xl md:text-8xl text-4xl font-bold text-[#303439]">
            SERVICES
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-sm font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
              What I Do
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  lg:text-left gap-10 py-16 max-w-5xl justify-center items-center ">
          <div className="flex gap-4">
            <div className="bg-[#191C1F] text-[#5100EE] md:w-28 w-36 h-16 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon icon={faPalette} size="2x" />
            </div>

            <div className="text-left">
              <h1 className="md:text-2xl text-xl font-bold text-white ">
                MERN Stack Developer
              </h1>
              <p className="text-[#FFFFFF80] md:text-sm text:xs ">
                I am a full-stack MERN developer with over 1+ years of
                experience building full-stack web applications. I have a
                passion for creating high-quality, efficient and scalable web
                applications.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#191C1F] text-[#5100EE] md:w-28 w-36 h-16 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </div>
            <div className="text-left">
              <h1 className="md:text-2xl text-xl font-bold text-white">
                Web Design
              </h1>
              <p className="text-[#FFFFFF80] md:text-sm text:xs">
                I am a web designer, skilled in HTML, CSS, JavaScript and able
                to use cutting-edge technologies to create modern, efficient,
                and functional web apps with unique and user-friendly experience
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#191C1F] text-[#5100EE] md:w-28 w-36 h-16 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon icon={faServer} size="2x" />
            </div>
            <div className="text-left">
              <h1 className="md:text-2xl text-xl font-bold text-white">
                Backend Devolopment
              </h1>
              <p className="text-[#FFFFFF80] md:text-sm text:xs">
                I am a Node.js backend developer with extensive knowledge in
                developing and maintaining web applications, REST APIs,
                databases, server management, Express, MongoDB, and AWS.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#191C1F] text-[#5100EE] md:w-28 w-36 h-16 rounded-lg flex justify-center items-center">
              <FontAwesomeIcon icon={faPencilRuler} size="2x" />
            </div>
            <div className="text-left">
              <h1 className="md:text-2xl  text-xl font-bold text-white">
                Frontend Developer
              </h1>
              <p className="text-[#FFFFFF80] md:text-sm text:xs ">
                I am a frontend developer with a passion to create high-quality,
                user-friendly, interactive and intuitive web applications.
                Skilled in HTML, CSS, JavaScript, jQuery, AJAX, React, Redux,
                Bootstrap, Tailwind, Sass, Figma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
