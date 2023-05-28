import React, { useState } from "react";
import { others } from "../../types";

export default function Language() {
  const [hoveredLanguage, setHoveredLanguage] = useState("");

  const handleLanguageHover = (languageName) => {
    setHoveredLanguage(languageName);
  };

  const handleLanguageLeave = () => {
    setHoveredLanguage("");
  };

  return (
    <div className="flex flex-wrap justify-center mt-4" style={{ padding: "30px" }}>
      {others.map((language) => {
        const IconComponent = language.Icon;
        return (
          <div
            key={language.name}
            className="flex flex-col items-center mx-1"
            onMouseEnter={() => handleLanguageHover(language.name)}
            onMouseLeave={handleLanguageLeave}
          >
            <div className="relative">
              <IconComponent className="text-white text-4xl" />
              {hoveredLanguage === language.name && (
                <span className="absolute bottom-10  text-sm text-center bg-gray-200 text-black px-10 rounded-md">
                  {language.name}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
