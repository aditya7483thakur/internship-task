import React from "react";

type VideoData = {
  heading: string;
  desc: string;
  end: string;
  video: string;
};

const Section2: React.FC = () => {
  const arr: VideoData[] = [
    {
      heading: "Sign Up",
      desc: "Create your account tailored to your role—producer, supplier, transport provider, or retailer.",
      end: "“Watch the video to see how easy it is to get started.”",
      video: "https://www.youtube.com/embed/h45u0OpJ4ik?si=hJNKFhLlmY56XKuP",
    },
    {
      heading: "Centralized Dashboard",
      desc: "Access your personalized dashboard to manage orders, track deliveries, and communicate seamlessly with other parties involved in the supply chain.",
      end: "“See how the centralized dashboard simplifies your workflow.”",
      video: "https://www.youtube.com/embed/8c8Jcs_QuQg?si=_uBwMI5LEl3AljXv",
    },
    {
      heading: "Real-Time Updates",
      desc: "Stay informed with real-time notifications and live transaction views. Receive instant updates on order statuses, delivery confirmations, and any issues that arise.",
      end: "“Learn how real-time updates keep you informed.”",
      video: "https://www.youtube.com/embed/im_hGVcXs7U?si=N9avow2N0Rd2uCZs",
    },
    {
      heading: "Efficient Dispute Resolution",
      desc: "Handle quality or quantity disputes swiftly through our streamlined support case system. Upload documents, communicate with relevant parties, and work towards automated resolutions.",
      end: "“Understand our efficient dispute resolution process.”",
      video: "https://www.youtube.com/embed/ScfZbuSDx34?si=a44pPEF_beZ0O6YK",
    },
  ];

  return (
    <div className="mt-20 mx-4 md:mx-10 lg:mx-40">
      <div className="px-4 md:px-10 lg:px-28 text-center">
        <div className="mb-7 font-bold text-4xl md:text-5xl">
          How It <span style={{ color: "#A7DA7C" }}>Works</span> ?
        </div>
        <span
          className="font-medium leading-5 capitalize"
          style={{ wordSpacing: "3px" }}
        >
          Learn how Rosstech transforms the trading of fruits and vegetables by
          connecting producers, suppliers, transport providers, and retailers
          through our unified platform. Our step-by-step video guides will walk
          you through the entire process, ensuring you understand how to make
          the most of Rosstech.
        </span>
      </div>

      {arr.map((data, index) => (
        <div
          className={`flex flex-col lg:flex-row justify-center mt-20 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          key={index}
        >
          <div
            className={`w-full lg:w-1/2 ${
              index % 2 !== 0 ? "lg:pl-20" : "lg:pl-10"
            } px-4 lg:px-0`}
          >
            <div
              style={{ color: "#8972EC" }}
              className="underline font-bold text-2xl md:text-3xl lg:text-[32px]"
            >
              {data.heading}
            </div>
            <div className="my-5 capitalize text-base md:text-lg font-normal">
              {data.desc}
            </div>
            <div
              className="capitalize underline font-semibold text-sm md:text-base italic"
              style={{ color: "#8972EC" }}
            >
              {data.end}
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden px-4 lg:px-10 mt-10 lg:mt-0">
            <iframe
              width="100%"
              height="auto"
              src={data.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
              style={{
                aspectRatio: "16/9",
                maxWidth: "500px",
              }}
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
