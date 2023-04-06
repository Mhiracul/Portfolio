import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-[#191C1F] py-16 md:px-20 px-6 "
      style={{ width: "100%", float: "right" }}
    >
      <div className="xl:flex  justify-between   text-[#DCDCDC] font-medium">
        <p>
          Copyright © 2023{" "}
          <span className="text-[#5100EE] font-bold"> Miracle. </span> All
          Rights Reserved.
        </p>
        <div className="flex gap-8">
          <p>Terms & Policy</p>
          <p> Disclaimer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
