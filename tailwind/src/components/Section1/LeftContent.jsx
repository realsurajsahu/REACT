import React from "react";
import HeroText from "./HeroText";
import HeroArrow from "./HeroArrow";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between h-[95%] w-1/3 pt-12">
      <HeroText/>     
      <HeroArrow/>
    </div>
  );
};

export default LeftContent;
