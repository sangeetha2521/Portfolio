import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6  lg:py-10">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center mb-4 lg:mb-0">
          <a href="https://www.linkedin.com/in/25sangeetha/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/sangeetha2521" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub className="text-xl" />
          </a>
          <a href="devsangisuresh@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-xl" />
          </a>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-sm lg:text-base">© {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
