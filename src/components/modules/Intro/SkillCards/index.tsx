import React from "react";
import SkillCard from "./Card";
import { AppDevelopment, IdeaBulb, WebDevelopment } from "@/assets/svg";

const response = [
  {
    headline: "Crafting Seamless Web Experiences",
    description:
      "I thrive on building dynamic and responsive web applications using the MERN/MEAN stack. My passion lies in creating intuitive user interfaces backed by robust server-side logic.",
    skills: [
      "React",
      "Next",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      //   "HTML",
      //   "CSS",
      "REST APIs",
      "Git",
    ],
    icon: <WebDevelopment />,
  },
  {
    headline: "Bringing Ideas to Life - Natively",
    description:
      "I'm energized by the challenge of crafting performant and engaging mobile experiences. My expertise lies in leveraging React Native and Flutter to deliver cross-platform solutions.",
    skills: [
      "React Native",
      "Flutter",
      "Dart",
      //   "Mobile UI/UX",
      //   "State Management",
      "Native APIs",
      "App Store Deployment",
    ],
    icon: <AppDevelopment />,
  },
  {
    headline: "Driven to Deliver High-Impact Solutions",
    description:
      "I'm a highly motivated engineer with a collaborative spirit. My goal is to understand your vision and build high-quality, scalable applications that exceed expectations.",
    skills: [
      "Problem-solving",
      "Analytical thinking",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Agile Methodologies",
    ],
    icon: <IdeaBulb />,
  },
];

const isFirst = (index: number) => {
  return index === 0;
};

const isLast = (index: number) => {
  return index === response.length - 1;
};

const SkillCards = () => {
  return (
    <div className="w-full md:-mt-[8rem] -mt-[4rem] flex md:flex-row flex-col justify-center items-center px-[2rem] pb-[4rem]">
      {response.map((card, index) => (
        <SkillCard
          key={index}
          {...card}
          isFirst={isFirst(index)}
          isLast={isLast(index)}
        />
      ))}
    </div>
  );
};

export default SkillCards;
