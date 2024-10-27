import React from "react";
import "./styles.css";

interface Props {
  isFirst?: boolean;
  isLast?: boolean;
  icon?: JSX.Element;
  headline?: string;
  description?: string;
  skills?: string[];
}

const getClasses = (isFirst?: boolean, isLast?: boolean): string => {
  let baseClasses = "";

  if (isFirst && isLast) {
    baseClasses += "only_card";
  } else if (isFirst) {
    baseClasses += "first_card";
  } else if (isLast) {
    baseClasses += "last_card";
  }

  return baseClasses;
};

const SkillCard = ({
  icon,
  headline,
  description,
  skills,
  isFirst,
  isLast,
}: Props) => {
  return (
    <div className={`border card shadow-lg ${getClasses(isFirst, isLast)}`}>
      <div className="w-full h-full p-8 flex flex-col gap-4 pt-16 justify-start items-center">
        <div className="w-[6rem] h-[6rem] rounded-full bg-[#5BE9B9] flex justify-center items-center p-2">
          {icon && icon}
        </div>
        <h1 className="text-lg text-center font-bold w-60 mt-4">{headline}</h1>
        <p className="font-medium text-center leading-7">{description}</p>
        <p className="font-bold text-center text-[#666AF6] mt-4">
          Tools I used:
        </p>
        <div className="w-full flex flex-row flex-wrap gap-4 justify-center items-center">
          {skills?.map((s, index: number) => (
            <p className="text-[#000000] font-medium" key={index}>
              {s}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
