import React from "react";
import Header from "./header/header";
import Profile from "./Profile";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Skils from "./skils/Skils";
import Footer from "./footer/index";
import { setDarkTheme } from "../../../reducers/slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Services from "./services/indes";

export default function HomePage() {
  const theme = useSelector((state) => state.portFolio.defaultTheme);
  const dispatch = useDispatch();
  const [className, setClassName] = useState("");

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
        ? "w-full  text-black text-sm bg-gradient-to-r from-[#e7f3ff] to-[#ffffff]"
        : "w-full  bg-black text-white"
    );
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow">
        <div className={className}>
          <Header />
          {/* Content */}
          {/* <Profile /> */}
          {/* <About /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
          {/* <Skils /> */}
          {/* <Services /> */}
        </div>
      </div>
      <div className="footer">
        {/* <Services /> */}
        <Footer />
      </div>
    </div>
  );
}
