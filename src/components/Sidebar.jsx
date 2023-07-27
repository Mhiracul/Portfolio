import React, { useState } from "react";
import { mine } from "../assets";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[50px] z-[99999] flex justify-between bg-[#0E1013]  items-center px-8  text-gray-300">
      <div className="hidden md:block">
        <img
          src={mine}
          alt="Okeke Miracle"
          className="rounded-full w-12 h-12 mr-4 "
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-10">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="z-10 flex gap-4 w-full md:hidden">
        <h1 className="font-bold">Miracle Okeke</h1>
      </div>
      <div onClick={handleClick} className="z-10 flex gap-4 w-full md:hidden">
        <FaGithub size={18} />
        <FaLinkedinIn size={18} />
        <FaFacebookF size={18} />
        <FaTwitter size={18} />
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-96 bg-[rgba(0,0,0,.95)] flex flex-col justify-center items-start"
        }
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={800}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block "
        >
          About Me
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          What I Do
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={600}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Resume
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Portfolio
        </Link>
        <Link
          to="testimonial"
          spy={true}
          smooth={true}
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Testimonial
        </Link>
        <span className="px-4"></span>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#DCDCDC] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Contact Me
        </Link>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[4px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/okeke-miracle-414685248/"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[4px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Mhiracul"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[4px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#all/FMfcgzGsltMvBxhpMqTljhqCcCBzBplb"
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[4px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
