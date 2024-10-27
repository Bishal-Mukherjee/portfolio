import React from "react";
import Header from "./Header";
import Description from "./Description";

const IntroBanner = () => {
  return (
    <div className="pt-16 w-full flex flex-col gap-12 justify-center items-center">
      <Header />
      <Description />
    </div>
  );
};

export default IntroBanner;
