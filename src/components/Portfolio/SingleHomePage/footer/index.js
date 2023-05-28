import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#D3E0EA] py-2 lg:py-2 max-h-screen">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <p className="font-bold mb-2">Let's talk</p>
          <p className="mb-2">Feel free to contact me</p>
          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/25sangeetha/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/sangeetha2521" target="_blank" rel="noopener noreferrer" className="mr-4">
              <FaGithub className="text-xl" />
            </a>
            <a href="mailto:devsangisuresh@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        <p className="text-sm lg:text-base mt-4">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
