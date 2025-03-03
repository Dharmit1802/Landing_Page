import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-[#F8D57E] px-2 md:px-8 lg:px-16 py-4 ">
      <div className="mx-auto flex justify-end md:justify-between items-center">
        <h1 className="hidden md:inline font-bold text-xl text-[#2D2D2D]">
          LandingPage
        </h1>
        <div className="flex gap-6 font-bold text-[#009379] items-center">
          <h1 className="hidden md:inline mr-6">contacts</h1>
          <button className="bg-[#E5F4F2] hidden md:inline px-8 py-3 rounded-2xl">
            How it works
          </button>
          <button className="bg-[#009379] text-white px-8 py-3 rounded-2xl">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
