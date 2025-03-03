import React from "react";
import workImg from "../assets/Work.svg";

function LatestWork() {
  const data = [
    {
      img: workImg,
      title: "Project Title",
      desc: "lorem loremnuh8u dnwui",
      category: "work",
    },
    {
      img: workImg,
      title: "Project Title",
      desc: "lorem loremnuh8u dnwui",
      category: "work",
    },
    {
      img: workImg,
      title: "Project Title",
      desc: "lorem loremnuh8u dnwui",
      category: "work",
    },
  ];

  return (
    <div className="px-8 md:px-16 bg-[#F8F9FF] py-7 md:py-14">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col gap-7 items-center">
          <h1 className="text-4xl text-[#2D2D2D] capitalize font-bold leading-snug">
            Discover our latest work
          </h1>
          <p className="text-md text-[#2D2D2D] font-light">
            Explore our portfolio and see the latest and greatest projects that
            we've brought to life.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-y-4 gap-x-4 lg:px-32 py-7 lg:py-14">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex md:w-7/8 flex-col gap-3 shadow-md rounded-2xl"
            >
              <div>
                <img src={item.img}></img>
              </div>
              <div className="flex flex-col gap-2 px-5 py-4 justify-center items-start">
                <h1 className="font-semibold text-[18px]">{item.title}</h1>
                <p className="font-normal text-[14px]">{item.desc}</p>
                <p className="font-light text-[12px]">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestWork;
