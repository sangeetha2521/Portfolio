import React from "react";
import { tools } from "../../types";

export default function Tools() {
  return (
    <div className="flex justify-center mt-4" style={{ padding: "30px" }}>
      {tools.map((language) => {
        const IconComponent = language.Icon;
        // Assign the icon component to a variable
        return <IconComponent key={language.Icon} className="text-white text-4xl mx-2" />; // Render the icon component
      })}
    </div>
  );
}
