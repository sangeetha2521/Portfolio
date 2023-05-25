import React from "react";
import { menu } from "./types";
import { setDarkTheme } from "../../../../reducers/slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Header() {
  const theme = useSelector((state) => state.portFolio.defaultTheme);
  const dispatch = useDispatch();
  const [classNames, setClassName] = useState("");

  const onClickChangeTheme = () => {
    if (theme === "light") {
      dispatch(setDarkTheme("black"));
    } else {
      dispatch(setDarkTheme("light"));
    }
  };

  useEffect(() => {
    setClassName(
      theme === "light"
        ? " w-full h-full  text-sm h-full bg-gradient-to-r from-[#e7f3ff] to-[#ffffff]"
        : "w-full h-full bg-black text-white"
    );
  }, [theme]);
  return (
    <div className={classNames}>
      <button className="flex ml-10 mt-2  " onClick={() => onClickChangeTheme()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      {menu.map((Item) => {
        return (
          <div
            key={Item.Projects}
            className="h-[20%] w-full flex ml-auto justify-center p-6 space-x-4 font-poppins text-gray-400 font-semibold border-b-2 shadow-sm"
          >
            <a href={Item.home} className="text-gray-500 hover:text-blue-500  ">
              {Item.home}
            </a>
            <a href={Item.Projects} className="text-gray-500 hover:text-blue-500 ">
              {Item.Projects}
            </a>
            <a href={Item.AboutMe} className="text-gray-500 hover:text-blue-500 ">
              {Item.AboutMe}
            </a>
            <a href={Item.Contact} className="text-gray-500 hover:text-blue-500 ">
              {Item.Contact}
            </a>
          </div>
        );
      })}
    </div>
  );
}
