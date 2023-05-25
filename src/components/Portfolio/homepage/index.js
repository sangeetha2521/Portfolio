import React from "react";
import Header from "./header/header";
import Profile from "./Profile";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Skils from "./skils/Skils";
import { setDarkTheme } from "../../../reducers/slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
        ? " w-full h-full text-black text-sm h-full bg-gradient-to-r from-[#e7f3ff] to-[#ffffff]"
        : "w-full h-full bg-black text-white"
    );
  }, [theme]);
  return (
    <div className={className}>
      <Header />

      <Profile />
      <About />
      <Projects />
      <Contact />
      <Skils />
    </div>
  );
}
