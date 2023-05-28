import React from "react";

export default function Contact() {
  console.log("contact");
  return (
    <div className="flex flex-wrap justify-center mt-8">
      <div className="flex ml-4 mr-4 p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="w-full">
          <p className="font-poppins text-xl text-center md:text-left">
            Feel free to reach out to me through any of the following channels:
          </p>
          <p className="font-light font-poppins text-sm text-center md:text-left pt-2">
            <br />
            📧 Email: [Your Email Address]
            <br />
            🔗 LinkedIn: [Your LinkedIn Profile URL]
            <br />
            💻 GitHub: [Your GitHub Profile URL]
            <br />
            <br />
            I'm always eager to connect and engage in meaningful conversations!
          </p>
        </div>
      </div>
    </div>
  );
}
