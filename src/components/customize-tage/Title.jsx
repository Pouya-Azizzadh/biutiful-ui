import React from "react";

const Title = ({ children, className }) => {
  return (
    <h2 className={`text-[48px] font-bold leading-[76px] text-white 	${className}`}>
      {children}
    </h2>
  );
};

export default Title;
