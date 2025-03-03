import React from "react";
import { Github, Instagram, LinkedinIcon, Youtube } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#F8D57E] ">
      <div className="py-[60px] flex items-center justify-center mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-4xl text-[#2D2D2D] capitalize font-bold leading-snug">
            Get Landing Page UI Kit Today!
          </h1>
          <p className="text-md text-[#2D2D2D] font-light">
            Break Figma limits and explore the endless possibilities with Anima.
          </p>
          <button className="bg-[#009379] text-white px-8 py-3 rounded-2xl">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-black px-[80px] py-6 flex justify-between items-center text-white">
        <div>
          <h1 className="text-white font-light text-[12px]">
            © 2023 Anima’s Landing Page Ui Kit.{" "}
          </h1>
        </div>
        <div className="flex gap-3">
          <Instagram className="bg-gray-700 p-2 rounded-full" size={35} />
          <Github className="bg-gray-700 p-2 rounded-full" size={35} />
          <Youtube className="bg-gray-700 p-2 rounded-full" size={35} />
          <LinkedinIcon className="bg-gray-700 p-2 rounded-full" size={35} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
