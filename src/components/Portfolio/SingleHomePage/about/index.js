import React from "react";

export default function About() {
  return (
    <div className="flex flex-wrap justify-center mx-10 ">
      <div className="flex flex-col md:flex-row ml-4 mr-4 p-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="w-full">
          <h2 className="font-poppins font-bold text-3xl mb-4 text-primary-color">About Me</h2>
          <p className="font-bold text-primary-color md:text-4xl font-poppins text-sm text-justify">
            Hey there! I'm Sangeetha, <br></br>
            <p className="font-light md:text-sm text-justify md:mt-5">
              👩‍💻 A software engineer who knows how to make coding fun. With 1 year of internship experience and
              currently working as a full stack developer at Konnectify, I'm passionate about creating impressive
              websites.
            </p>
          </p>
          <p className="font-light font-poppins text-sm justify mt-2">
            ✨ I love turning lines of code into captivating digital journeys. I bring a touch of magic to every
            project, delivering visually stunning websites with an exceptional user experience in the digital world.
          </p>
          <p className="font-light font-poppins text-sm justify mt-2">
            🎵📷✈️ When I'm not coding, I indulge in my passions for music, photography, and travel, which inspire my
            creativity and add that extra spark to my work.
          </p>
          <p className="font-light font-poppins text-sm justify mt-2">
            Let's create something extraordinary together! Explore my portfolio and let's make waves in the digital
            world.
          </p>
        </div>
      </div>
    </div>
  );
}
