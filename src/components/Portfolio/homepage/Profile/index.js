import React from "react";
import image from "./7.jpg";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row justify-betweeen md:mx-56 items-center min-h-screen">
      <div className="md:w-[40%] mx-4">
        <div className="flex justify-center items-center hover:transition-all">
          <div className="rounded-full bg-gray-200 shadow-md p-2 mb-8">
            <img
              src={image}
              className="flex rounded-full h-[40%] shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[60%] mx-4">
        <div className="flex justify-center items-center font-poppins font-semibold text-justify md:text-4xl lg:text-8xl">
          <p className="text-center md:text-5xl">
            Hello, I'm <br />a Software Engineer.
            <p className="font-poppins font-light md:text-xl lg:text-2xl pt-2">
              <br />
              Fond of creating web application designs and bringing them to life using code & developing web designs.
            </p>
            <a
              href="Resume-final.pdf"
              download={"Resume-final.pdf"}
              target={"_blank"}
            >
              <a className="mt-4 rounded-md hover:bg-primary-color text-sm px-4 py-2 bg-primary-color text-white">
                Download Resume
              </a>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
