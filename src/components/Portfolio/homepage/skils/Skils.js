import React from "react";
import { skils } from "../../types";
// import { Icon } from "react-icons";
export default function Skils() {
  return (
    <>
      <h2 className="font-poppins  w-full ">Skils</h2>
      <div className=" flex h-[5%] font-poppins bg-white ">
        {skils.map((Item) => {
          return (
            <div
              key={Item.name}
              className=" flex justify-center p-2 space-x-2 font-poppins text-primary-color font-semibold border-b-2 shadow-sm"
            >
              {Item.name}
              {/* <Icon className="h-4 w-4" /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
