import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#272C31] py-16 md:px-20 px-6 w-full">
      <div>
        <div className="relative flex-col text-center">
          <h1 className="md:text-9xl text-5xl font-bold text-[#212427]">
            CONTACT
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center  md:text-4xl text-3xl font-bold  text-white text-center">
            <span className="border-b-2 border-[#5100EE] pb-1 mb-1">
              Get in Touch
            </span>
          </h2>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-1 grid-cols-1 py-16 lg:grid-cols-2 w-full">
          <div className="text-[#DCDCDC] mx-auto md:mx-0">
            <div className="xl:text-left sm:text-center md:text-left text-center">
              <h1 className="text-white font-bold text-2xl ">ADDRESS</h1>
            </div>
            <p className=" mt-4 xl:text-left md:text-center">
              No 40, Omolara-Olusi Str, Hopeville Estate, <br />{" "}
              Sangotedo-Ajah,Lagos State
            </p>
            <div className=" flex flex-col md:justify-start sm:justify-center">
              <div className="flex gap-2 mt-4 xl:text-left md:justify-start sm:justify-center ">
                <FaPhone color="#5100EE" size={14} />
                <p className="text-left">+234(9066306174)</p>
              </div>
              <div className="flex gap-2 mt-3  xl:text-left md:justify-start sm:justify-center">
                <FaMailBulk color="#5100EE" size={14} />
                <p className="text-left">mokeke185@gmail.com</p>
              </div>
            </div>
            <div className="mt-4 w-full">
              <div className="lg:text-left sm:text-center md:text-left text-center">
                <h1 className="text-white font-bold text-xl  ">FOLLOW ME</h1>
              </div>
              <div className="w-full flex gap-8 mt-4 xl:text-left md:justify-start sm:justify-center">
                <a href="https://github.com/Mhiracul">
                  {" "}
                  <FaGithub />
                </a>
                <a href="https://web.facebook.com/miracle.okeke.1238292/">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/MConcept8">
                  <FaTwitter />
                </a>
                <FaGoogle />
              </div>
            </div>
          </div>
          <div className="text-left md:mt-8 mt-6 xl:mt-0">
            <h1 className="text-white font-bold text-2xl sm:text-center xl:text-left md:text-center text-center">
              SEND US A NOTE
            </h1>
            <form
              action="https://getform.io/f/113ba508-09ec-404a-bde1-65b7a0afb657"
              method="POST"
              className="flex-col mt-4"
            >
              <div className="md:grid xl:grid-cols-2 md:grid-cols-1 sm:grid sm:grid-cols-1 flex-0  justify-center items-center  gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="md:w-full xl:w-72 sm:w-full w-full h-12 rounded-lg p-4 bg-[#1B1F25] outline-none text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="md:w-full xl:w-72 w-full sm:w-full h-12 rounded-lg p-4 bg-[#1B1F25] outline-none text-white mt-4 md:mt-0"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  class="form-control"
                  rows="5"
                  required=""
                  placeholder="Tell us more about your needs........"
                  className="w-[100%] h-40 rounded-lg p-4 mt-4 bg-[#1B1F25] outline-none text-white"
                  style={{
                    marginBottom: "0px",
                    height: "196px",
                  }}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-[#5100EE] rounded-full w-52 h-12 font-bold text-white mt-4 outline-none"
                  style={{ background: "#5100EE" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
