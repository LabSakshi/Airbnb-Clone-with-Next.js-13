"use client";
import React from "react";

interface ContainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 
    md:px-10 sm:px-2 px-10">
      {children}
    </div>
  );
};

export default Container;
