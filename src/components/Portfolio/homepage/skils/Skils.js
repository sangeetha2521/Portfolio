import React from "react";
import { languages } from "../../types";
import Language from "./language";
import Tools from "./tools";
import Others from "./others";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-8">
      <div className="max-w-lg  p-4 space-y-10 w-full ">
        <p className="text-3xl md:text-5xl text-primary-color font-semibold mb-4 text-center">Skills</p>
        <div className="mb-8 bg-primary-color rounded-lg text-gray-400 font-[Raleway] ">
          <p className="font-semibold font-poppins text-center py-2">Programming Languages</p>
          <Language />
        </div>

        <div className="mb-8 bg-primary-color rounded-lg  text-gray-400 font-[Raleway] ">
          <p className="font-semibold font-poppins text-center py-2">Tools</p>
          <Tools />
        </div>

        <div className="mb-8 bg-primary-color rounded-lg text-gray-400 font-[Raleway] ">
          <p className="font-semibold font-poppins text-center py-2">Others</p>
          <Others />
          <div className="flex justify-center mt-4">
            {languages.map((language) => (
              <img key={language.id} src={language.id} className="text-white text-4xl mx-2" alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
