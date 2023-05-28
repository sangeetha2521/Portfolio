import React from "react";
import { languages } from "../../types";
import Language from "./language";
import Tools from "./tools";
import Others from "./others";

export default function SingleHomePageSkills() {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-2 justify-center w-full bg-[#D3E0EA]">
      <div className="max-w-lg  p-4 space-y-10 w-full ">
        <p className="text-xl md:text-xl text-primary-color font-semibold mb-4 text-center">Skills</p>
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
        </div>
      </div>
    </div>
  );
}
