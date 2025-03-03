import React from "react";
import tech1 from "../assets/tech.svg";

function IntegrationTech() {
  return (
    <div className="bg-[#F8F9FF] flex justify-center items-center">
      <div className="flex w-full flex-col gap-14 items-center text-center justify-center md:px-[55px] py-10 lg:py-[120px]">
        <div className="flex flex-col md:px-0 px-8 gap-4 items-center">
          <h1 className="text-4xl  text-[#2D2D2D] capitalize font-bold leading-snug">
            more than 50 Integrations
          </h1>
          <p className="text-md text-[#2D2D2D] font-light">
            We integrate with more than 50 apps you use daily
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-5 md:gap-12">
          <div className="w-[90%] flex justify-between">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <img className="md:w-24 w-14" src={tech1} />
            ))}
          </div>
          <div className=" w-[73%] flex justify-between">
            {[1, 2, 3, 4, 5].map((item) => (
              <img className="md:w-24 w-14" src={tech1} />
            ))}
          </div>
          <div className=" w-[54%] flex justify-between">
            {[1, 2, 3, 4].map((item) => (
              <img className="md:w-24 w-14" src={tech1} />
            ))}
          </div>
        </div>
        <button className="bg-[#009379] text-white px-8 py-3 rounded-2xl">
          View All Integrations
        </button>
      </div>
    </div>
  );
}

export default IntegrationTech;
