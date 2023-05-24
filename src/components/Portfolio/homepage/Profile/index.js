import React from "react";
import image from "./img1.jpg";

export default function Profile() {
  return (
    <div className="flex flex-wrap justify-center h-[60%] mt-8">
      <div className="flex justify-center items-center  w-[20%] hover:transition-all">
        <div className="rounded-full bg-gray-200 shadow-md p-2  mb-8 ">
          <img
            src={image}
            className=" flex rounded-full h-[40%] shadow-mdtransition-transform duration-300 transform hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex ml-20 p-10 w-[40%] font-poppins text-xl text-justify">
        <p>
          Hey, nice to meet you! I go by the name Sangeetha, and I'm a Software Engineer.
          <p className="font-light text-sm pt-2">
            <br></br>I've taken a self-taught approach to my development journey and I'm currently based in India 🇮🇳.
            Over the years, I've delved into various technologies, gaining experience in both backend and frontend
            domains. At the moment, I'm proudly serving as a Software Engineer at Konnectify. If you're interested in
            learning more about me kindly check out my LinkedIn profile. Feel free to connect with me there!
          </p>
        </p>
      </div>
    </div>
  );
}
