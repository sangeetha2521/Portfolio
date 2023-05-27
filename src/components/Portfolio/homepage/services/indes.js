import React from "react";
import { services } from "../../types";

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-24 pb-6">
      <div className="font-poppins font-semibold text-3xl text-primary-color mb-6">Services</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {services.map((service) => (
          <div className="bg-white shadow-md rounded-md p-6" key={service.name}>
            <div className="flex items-center justify-center mb-4">
              <img src="./" className="" alt="" /> {/* Replace "./" with the image source */}
              <p className="text-center font-semibold text-primary-color font-poppins ml-2">{service.name}</p>
            </div>
            <p className="text-center font-poppins font-light leading-loose">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
