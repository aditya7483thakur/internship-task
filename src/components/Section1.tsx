import React from "react";

const Section1: React.FC = () => {
  return (
    <>
      <div className="mt-10  md:mx-10 lg:mx-40 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0">
          <div className="w-11/12 mx-auto lg:mx-0">
            <div className="relative inline-block">
              <div
                style={{ backgroundColor: "#DCB0FE66" }}
                className="absolute h-8 min-w-[250px] md:min-w-[340px] top-[60%] left-[-15px] z-0"
              ></div>
              <div className="relative z-10 line font-bold text-4xl md:text-5xl">
                Revolutionize
              </div>
            </div>
            <div className="line font-bold text-4xl md:text-5xl mt-4">
              Your Supply Chain.
            </div>
            <div className="mt-4 text-base ml-3">
              Welcome to Rosstech, the ultimate platform for seamless,
              transparent, and efficient trading of fruits and vegetables.
              Connect producers, suppliers, transport providers, and retailers
              in a unified system to manage quality, track deliveries, and
              resolve disputes effortlessly.
            </div>
            <button className="rounded-md mt-4 px-5 py-3 bg-neutral-950 text-white ml-3">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-end">
          <img
            height="580px"
            className="w-full max-w-xs md:max-w-md lg:max-w-none"
            src="Frame5.png"
            alt="Image"
          />
        </div>
      </div>

      <div className=" md:mx-10 lg:mx-40 flex flex-col lg:flex-row justify-center">
        <div className="w-full flex justify-center items-end lg:w-auto">
          <img
            src="Group5.png"
            className="w-full max-w-xs md:max-w-xs lg:max-w-none"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center mx-auto mt-10 lg:mt-0">
          <div className="text-3xl md:text-4xl font-bold">
            Key <span style={{ color: "#8972EC" }}>Features</span> Of Rosstech
          </div>
          <div className="flex items-center text-lg md:text-2xl mt-8 md:mt-12 font-normal">
            <img
              src="image1.png"
              className="w-8 h-8 md:w-auto md:h-auto"
              alt=""
            />
            <span className="ml-4 md:ml-6">Centralized Data Repository</span>
          </div>
          <div className="flex items-center text-lg md:text-2xl mt-8 font-normal">
            <img
              src="image2.png"
              className="w-8 h-8 md:w-auto md:h-auto"
              alt=""
            />
            <span className="ml-4 md:ml-6">Seamless Communication</span>
          </div>
          <div className="flex items-center text-lg md:text-2xl mt-8 font-normal">
            <img
              src="image3.png"
              className="w-8 h-8 md:w-auto md:h-auto"
              alt=""
            />
            <span className="ml-4 md:ml-6">Real-Time Updates</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
