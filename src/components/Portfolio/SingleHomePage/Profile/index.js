import React from "react";
import image from "../../homepage/Profile/img2.jpg";
import { Link } from "react-router-dom";

export default function SingleHomePageProfile() {
  return (
    <div className="flex flex-col justify-center md:flex-row my-10 md:mx-60 items-center  md:justify-center ">
      <div className="md:w-[20%] mx-4">
        <div className="flex justify-center items-center hover:transition-all">
          <div className="rounded-full bg-[#D3E0EA] shadow-sm pb-2 mt-2 mb-8">
            <img
              src={image}
              className="flex rounded-full h-36  md:h-[20%] lg:h-[40%] shadow-sm transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              alt="Profile Image"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[60%] md:my-10 lg:my-10 md:flex md:justify-center mx-32 md:mx-32">
        <div className="flex mt-5 md:m-0 text-center md:text-left lg-text-center md:w-[50%] lg-w[60%] flex-col space-y-5">
          <p className=" md:text-xl text-start">
            Hello 🤟, I'm Sangeetha, <br />A Software Developer.
            <p className="font-poppins font-light md:text-xl lg:text-xl pt-2">
              <br />
              Fond of creating web application designs and bringing them to life using code & developing web designs.
            </p>
            <div className="flex md:mb-10  mt-4">
              <a
                href="/static/Sangeetha/Resume-Sangeetha.pdf"
                download={"/static/Sangeetha/Resume-Sangeetha.pdf"}
                target={"_blank"}
                className="rounded-md hover:bg-primary-color text-sm px-4 py-2 bg-primary-color text-white"
              >
                Download Resume
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
