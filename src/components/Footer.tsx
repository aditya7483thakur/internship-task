import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-60 bg-black text-white mt-32">
      <div className="flex flex-col lg:flex-row justify-center md:justify-between mx-8 lg:mx-48 pt-16">
        <div className="mb-8 mx-auto md:mx-0 text-center md:text-left lg:mb-0">
          <div className=" text-3xl font-bold ">
            <span style={{ color: "#8972EC" }}>ross</span>tech
          </div>
          <div className="font-normal text-sm">
            connecting your supply chain seamlessly
          </div>
          <div className="font-normal text-sm mt-10">Contact Us -</div>
          <div className="font-normal text-sm ">company@gmail.com</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-10 font-semibold text-lg md:text-2xl">
          <a
            className="flex justify-center items-center underline"
            href="https://www.instagram.com/dev.with.adi/"
          >
            Instagram
          </a>
          <a
            className=" flex justify-center items-center text-gray-400"
            href="https://www.instagram.com/dev.with.adi/"
          >
            Facebook
          </a>
          <a
            className="flex justify-center items-center text-gray-400"
            href="https://www.linkedin.com/in/aditya7483"
          >
            Twitter
          </a>
          <a
            className=" flex justify-center items-center text-gray-400"
            href="https://www.linkedin.com/in/aditya7483"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <hr className="border-t-2 mt-20 border-gray-400 my-6 mx-8 lg:mx-32" />

      <div className="text-center mt-8 pb-10 text-gray-400">
        &copy;Rosstech 2024, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
