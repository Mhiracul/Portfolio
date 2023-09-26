import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#191C1F] py-2 ">
      <div className="container mx-auto">
        <div className="flex lg:flex-row md:flex-col mx-auto items-center  flex-col justify-between text-sm   text-[#DCDCDC] font-normal">
          <p className="md:text-sm text-xs">
            © 2023 <span className="text-[#5100EE] font-bold"> Miracle. </span>{" "}
            All Rights Reserved.
          </p>
          <div className="flex gap-1 md:text-sm text-xs">
            <p>Terms & Policy</p>
            <p> Disclaimer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
