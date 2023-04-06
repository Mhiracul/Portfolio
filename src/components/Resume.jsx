import React from "react";
import { CV } from "../assets";
import "./progress.css";

const Resume = () => {
  return (
    <div
      id="resume"
      className="bg-[#191C1F] py-16 md:px-20 px-6"
      style={{ width: "100%", float: "right" }}
    >
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
          <div className="items-start lg:text-left text-white font-bold text-2xl mt-4 text-left"></div>
          <div className="items-start lg:text-left text-white font-bold text-2xl mt-4 text-left">
            <h1>My Experience</h1>
          </div>

          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8 ">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="text-xl text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
            </div>
          </div>
          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8 flex lg:flex-row flex-col">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="text-xl text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
            </div>
          </div>

          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="text-xl text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
            </div>
          </div>
          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="text-xl text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
            </div>
          </div>
          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="text-xl text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
            </div>
          </div>
          <div className="bg-[#0E1013] rounded-lg items-start lg:text-left px-6 py-8">
            <div className="container text-left">
              <p className="bg-[#5100EE] text-white rounded-lg w-28 text-sm px-4">
                2000-2004
              </p>
              <h1 className="text-white font-bold md:text-2xl text-xl mt-4">
                Computer Science
              </h1>
              <h2 className="md:text-xl text-sm text-[#5100EE] mt-4">
                International University
              </h2>
              <p className="text-[#FFFFFF80] mt-4 md:text-xl text-sm">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent po ssim iriure.
              </p>
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
