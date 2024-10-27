import React from "react";
import { Development } from "@/assets/svg";
import SkillCards from "../SkillCards";

const Description = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Development className="intro_svg" width={600} />

      <div className="w-full h-[32rem] flex flex-col justify-start items-center bg-[#666AF6] md:-mt-[60px]">
        <p className="text-3xl font-bold text-center text-white mt-24">
          Hi, I&apos;m Bishal. Thanks for stopping by!
        </p>

        <p className="font-medium mt-4 text-center text-white md:w-2/4 md:px-4">
          Highly motivated Full Stack Software Engineer with 3+ years of
          experience in designing, developing, and deploying scalable web and
          mobile applications. Proficient in MERN/MEAN stack technologies,
          including React, Node.js, Express, and MongoDB, as well as mobile
          development frameworks like React Native and Flutter. Passionate about
          building high-quality, user-centric products and eager to contribute
          to innovative projects.
        </p>
      </div>

      <SkillCards />
    </div>
  );
};

export default Description;
