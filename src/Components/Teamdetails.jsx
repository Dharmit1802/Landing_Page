import React from "react";
import workImg from "../assets/Work.svg";
import user1 from "../assets/User Review/user1.svg";

function TeamDetails() {
  const data = [
    {
      img: user1,
      name: "Sarah M.",
      role: "Lead designer",
      desc: "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.",
      social: ["Twitter", "Dribble", "Linkedin"],
    },
    {
      img: user1,
      name: "Sarah M.",
      role: "Lead designer",
      desc: "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.",
      social: ["Twitter", "Dribble", "Linkedin"],
    },
    {
      img: user1,
      name: "Sarah M.",
      role: "Lead designer",
      desc: "With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.",
      social: ["Twitter", "Dribble", "Linkedin"],
    },
  ];

  return (
    <div className="px-8 md:px-16 bg-[#F8F9FF] py-7 md:py-14">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-7 items-center">
          <h1 className="text-4xl text-[#2D2D2D] capitalize font-bold leading-snug">
            meet our team
          </h1>
          <p className="text-md text-[#2D2D2D] font-light">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-y-4 gap-x-4 lg:px-32 py-7 md:py-14">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex md:w-7/8 flex-col justify-center items-center gap-3 px-7 py-6 shadow-md rounded-2xl"
            >
              <div className="w-full flex flex-col gap-3 items-center justify-center">
                <img className="w-[80px]" src={item.img}></img>
                <h1 className="text-[#111827]">{item.name}</h1>
                <h1 className="text-[#374151] text-[12px] -mt-2">
                  {item.role}
                </h1>
              </div>
              <div className="flex flex-col gap-4 pt-5 justify-center items-start">
                <h1 className="text-[#374151] text-[12px] -mt-2 leading-loose">
                  {item.desc}
                </h1>
                <div className="font-normal text-[14px] w-full flex justify-around">
                  {item.social.length > 0 &&
                    item.social.map((link, index) => (
                      <a
                        className="text-[#009379] font-semibold text-[12px]"
                        key={index}
                      >
                        {link}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
