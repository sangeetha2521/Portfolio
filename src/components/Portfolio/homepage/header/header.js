import React from "react";
import { menu } from "./types";
export default function Header() {
  return (
    <div className="h-[10%] font-poppins bg-white  w-100 ">
      {menu.map((Item) => {
        return (
          <div
            key={Item.Projects}
            className="h-[20%] w-full flex ml-auto justify-center p-6 space-x-4 font-poppins text-primary-color font-semibold border-b-2 shadow-sm"
          >
            <a href={Item.home} className="text-gray-700 hover:text-blue-500  ">
              {Item.home}
            </a>
            <a href={Item.Projects} className="text-gray-700 hover:text-blue-500 ">
              {Item.Projects}
            </a>
            <a href={Item.AboutMe} className="text-gray-700 hover:text-blue-500 ">
              {Item.AboutMe}
            </a>
            <a href={Item.Contact} className="text-gray-700 hover:text-blue-500 ">
              {Item.Contact}
            </a>
          </div>
        );
      })}
    </div>
  );
}
