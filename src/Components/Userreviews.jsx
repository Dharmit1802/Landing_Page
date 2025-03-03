import React from "react";
import user1 from "../assets/User Review/user1.svg";
import user2 from "../assets/User Review/user2.svg";
import rating from "../assets/User Review/rating.svg";

function Userreviews() {
  return (
    <div className="bg-[#F8D57E] ">
      <div className=" px-8 md:px-[120px] py-10 md:py-[120px] flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl text-[#2D2D2D] capitalize font-bold leading-snug">
            Real Stories from Satisfied Customers
          </h1>
          <p className="text-md text-[#2D2D2D] font-light">
            See how our landing page ui kit is making an impact.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 pt-15 gap-5">
          <div className="grid sm:grid-cols-3 bg-white justify-center items-start gap-12 rounded-3xl p-[40px]">
            <div className="sm:col-span-1 flex flex-col gap-3 justify-center items-center ">
              <img src={user1} />
              <h1 className="text-[#111827]">Lauren M.</h1>
              <p className="text-[#374151] text-[12px] -mt-2">
                UI Designer @Boo
              </p>
            </div>
            <div className="sm:col-span-2 h-full flex flex-col justify-evenly items-start">
              <div className="hidden md:inline">
                <img src={rating} />
              </div>
              <p className="text-[#374151] text-[15px] font-medium">
                "Anima’s Landing Page UI Kit has become a staple in my design
                toolkit. This kit has everything I need to get the job done
                quickly and efficiently."
              </p>
              <div className="md:hidden inline">
                <img src={rating} />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 bg-white justify-center items-start gap-12 rounded-3xl p-[40px]">
            <div className="sm:col-span-1 flex flex-col gap-3 justify-center items-center ">
              <img src={user2} />
              <h1 className="text-[#111827]">Lauren M.</h1>
              <p className="text-[#374151] text-[12px] -mt-2">
                UI Designer @Boo
              </p>
            </div>
            <div className="sm:col-span-2 h-full flex flex-col justify-evenly items-start">
              <div className="hidden md:inline">
                <img src={rating} />
              </div>
              <p className="text-[#374151] text-[15px] font-medium">
                "Anima’s Landing Page UI Kit has become a staple in my design
                toolkit. This kit has everything I need to get the job done
                quickly and efficiently."
              </p>
              <div className="md:hidden inline">
                <img src={rating} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userreviews;
