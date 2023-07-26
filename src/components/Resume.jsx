import React from "react";
import { CV } from "../assets";
import "./progress.css";

const Resume = () => {
  return (
    <div id="resume" className="bg-[#191C1F] py-16 md:px-20 px-6 w-full">
      <div>
        <div className="relative flex-col">
          <h1 className=" text-5xl md:text-9xl font-bold text-[#212427]">
            EXPERIENCE
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-3xl font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1 ">
              Skills
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  gap-10 py-20">
          <div>
            <div className="bg-[#0E1013] rounded-lg mb-10 items-start lg:text-left px-6 py-8 ">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                  2020-2023{" "}
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-2">
                  Computer Science
                </h1>
                <h2 className="text-xl text-[#5100EE] mt-2">
                  National Open University of Nigeria
                </h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-xs">
                  I am pursuing a Bachelor's degree in Computer Science from the
                  National Open University of Nigeria. My coursework includes a
                  wide range of topics such as programming, data structures,
                  algorithms, and software engineering. I am expected to
                  graduate in 2023 with a Second Class Upper (2.1) degree.
                </p>
              </div>
            </div>
            <div className="bg-[#0E1013] mb-10  rounded-lg items-start lg:text-left px-6 py-8 flex lg:flex-row flex-col">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-center text-white rounded-lg w-28 text-sm px-4">
                  2022
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-2">
                  Leadership and Management
                </h1>
                <h2 className="text-xl text-[#5100EE] mt-2">
                  Great Learning Academy
                </h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-xs">
                  I completed a course on Leadership and Management from Great
                  Learning Academy. The course covered various aspects of
                  leadership skills, team management, and effective
                  communication. This learning opportunity provided valuable
                  insights into effective leadership practices.
                </p>
              </div>
            </div>

            <div className="bg-[#0E1013]   rounded-lg items-start lg:text-left px-6 py-8">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-center text-white rounded-lg w-28 text-sm px-4">
                  2021
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-2">
                  Introduction to PHP
                </h1>
                <h2 className="text-xl text-[#5100EE] mt-2">Simplilearn</h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-xs">
                  I completed an introductory course on PHP from Simplilearn.
                  The course provided a solid foundation in PHP programming,
                  covering topics such as syntax, data types, control
                  structures, and functions. This course helped me expand my
                  knowledge of backend web development.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#0E1013] mb-10 rounded-lg items-start lg:text-left px-6 py-8">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                  2022-2022
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                  E-commerce Clothing Store
                </h1>
                <h2 className="text-xl text-[#5100EE] mt-2">
                  Personal Project
                </h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-xs">
                  I independently developed an e-commerce shopping website for
                  clothing and accessories. The website was built using React
                  for the frontend and integrated with Paystack for secure
                  payment processing. I designed and implemented product listing
                  pages, shopping cart functionality, and user authentication.
                  This project improved my skills in frontend development,
                  payment integration, and managing an end-to-end web
                  application.
                </p>
              </div>
            </div>
            <div className="bg-[#0E1013] mb-10  rounded-lg items-start lg:text-left px-6 py-8">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-center text-white rounded-lg w-28 text-sm px-4">
                  2022
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                  Frontend Developer Intern
                </h1>
                <h2 className="text-xl text-[#5100EE] mt-2">Nupat Teams</h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-sm">
                  During my internship at Nupat Teams, I had the opportunity to
                  work on a challenging project to create a logistics website
                  using React, Vite, and Tailwind CSS. I was responsible for
                  implementing various frontend features, optimizing website
                  performance, and ensuring a seamless user experience. This
                  experience allowed me to deepen my understanding of modern
                  frontend technologies and best practices in web development.
                </p>
              </div>
            </div>

            <div className="bg-[#0E1013]  rounded-lg items-start lg:text-left px-6 py-8">
              <div className="container text-left">
                <p className="bg-[#5100EE] text-center text-white rounded-lg w-28 text-sm px-4">
                  2023
                </p>
                <h1 className="text-white font-bold md:text-2xl text-xl mt-2">
                  QA Engineer - Investment Site
                </h1>
                <h2 className="md:text-xl text-sm text-[#5100EE] mt-2">
                  Client Project
                </h2>
                <p className="text-[#FFFFFF80] mt-2 md:text-xs text-xs">
                  As a QA Engineer, I collaborated with a client to test and
                  ensure the quality of their investment website. I performed
                  comprehensive testing of features such as user registration,
                  deposit, withdrawal, referral system, and user dashboard
                  functionality. I identified and reported bugs and worked
                  closely with developers to ensure their timely resolution.
                  This experience enhanced my skills in manual testing, bug
                  tracking, and working in a team environment to deliver a
                  high-quality product.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h1 className="items-start lg:text-left text-white font-bold text-2xl mt-4">
            My Skills
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-6">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  HTML5
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  90%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "90%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  CSS3
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  90%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "90%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  JAVASCRIPT
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  85%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "85%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  REACT
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  92%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "92%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  TAILWIND
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  95%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "95%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  NODEJS
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  65%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "65%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  MongoDB
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  70%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "70%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p
                  className="text-white font-medium mt-4"
                  style={{ fontSize: "18px" }}
                >
                  Git
                </p>
                <span
                  className="float-right text-white font-medium text-xl mt-4"
                  style={{ fontSize: "18px" }}
                >
                  85%
                </span>
              </div>
              <div className="bg-[#0E1013] rounded-full mt-4" style={{}}>
                <div
                  className="<ProgressBar /> rounded-full"
                  style={{
                    backgroundColor: "#5100EE",
                    width: "85%",
                    transition: "width 200ms ease 0s",
                    height: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="" style={{ display: "block", margin: "0 auto" }}>
            <button
              className=" border-2 rounded-full text-[#FFFFFF80] px-4 py-2 bg-transparent w-60 border-[#FFFFFF80] mt-6 outline-none hover:border-[#5100EE] hover:text-white"
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
    </div>
  );
};

export default Resume;
