import React, { useState } from "react";
import { menu } from "./types";
import { setDarkTheme, setActiveItem } from "../../../../reducers/slice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const theme = useSelector((state) => state.portFolio.defaultTheme);
  const activeItem = useSelector((state) => state.portFolio.activeItem);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onClickChangeTheme = () => {
    if (theme === "light") {
      dispatch(setDarkTheme("black"));
    } else {
      dispatch(setDarkTheme("light"));
    }
  };

  const handleItemClick = (item) => {
    console.log(item);
    // dispatch(setActiveItem(item));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`flex items-center  font-semibold font-poppins md:justify-between lg:justify-center xl:justify-center p-4 md:p-6 bg-[#D3E0EA]`}
      >
        {/* Theme toggle button */}
        {/* <button className="flex ml-2 md:ml-10" onClick={onClickChangeTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </button> */}
        {/* Mobile menu toggle */}
        <button className="md:hidden ml-2 focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        {/* Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block w-full md:max-h-1/2 mt-4 md:mt-0 md:flex md:items-center md:w-auto`}
        >
          {isOpen && (
            <button className="absolute top-0 right-0 m-4 focus:outline-none" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.key}`}
                  className={`${activeItem === item.key ? "text-blue-500" : "text-primary-color hover:text-blue-500"}`}
                  onClick={() => handleItemClick(item.key)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
