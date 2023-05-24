import React from "react";
import Header from "./header/header";
import Profile from "./Profile";
import Projects from "./projects";

export default function HomePage() {
  return (
    <div className="h-full bg-gradient-to-r from-[#e7f3ff] to-[#ffffff]">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}
