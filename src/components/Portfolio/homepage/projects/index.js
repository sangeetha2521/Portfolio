import React from "react";
import { Project } from "/Users/sangeetha/Desktop/Sang/Portfolio/src/components/common";
import { Link } from "react-router-dom";
import Thumbnail from "/Users/sangeetha/Desktop/Sang/Portfolio/src/components/common/thumbnail.jpeg";

export default function Projects() {
  return (
    <div className="mt-5 flex p-5 h-screen">
      {Project.map((item, index) => (
        <div
          key={index}
          className="flex flex-col cursor-pointer bg-[#D3E0EA]   w-96 h-64 m-2 p-2 rounded-md group relative"
        >
          <Link to={item.link}>
            <div className="thumbnail">
              <img src={Thumbnail} alt={item.title} />
            </div>
            <div className="flex mt-16">
              <h2 className=" flex font-mono font-bold mt-2">
                {item.title}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" flex ml-3 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
