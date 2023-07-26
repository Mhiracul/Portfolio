import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#191C1F] py-2 px-10 w-full">
      <div className="flex md:flex lg:flex-row md:flex-row mx-auto items-center  flex-col justify-between text-sm   text-[#DCDCDC] font-normal">
        <p>
          Copyright © 2023{" "}
          <span className="text-[#5100EE] font-bold"> Miracle. </span> All
          Rights Reserved.
        </p>
        <div className="flex gap-1">
          <p>Terms & Policy</p>
          <p> Disclaimer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
