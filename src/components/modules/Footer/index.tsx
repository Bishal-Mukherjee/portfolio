import React from "react";
import { Logo } from "@/assets/svg";
import { Github, LinkedIn } from "@/assets/svg";

const LINKED_IN_URL = "https://www.linkedin.com/in/bishal-mukherjee007/";
const GITHUB_URL = "https://github.com/bishal-mukherjee";

const Footer = () => (
  <div className="w-full bg-[#666AF6] flex flex-col justify-center items-center gap-4 py-20 mt-40">
    <Logo color="#666AF6" />

    <p className="text-white text-xl font-medium">
      Always learning, always creating.
    </p>

    <div className="w-full flex flex-row justify-center items-center gap-4">
      <a href={LINKED_IN_URL} target="_blank">
        <LinkedIn />
      </a>
      <a href={GITHUB_URL} target="_blank">
        <Github />
      </a>
    </div>

    <p className="text-white text-md font-medium text-center">
      Developed with ❤️ by <br /> Bishal Mukherjee
    </p>
  </div>
);

export default Footer;
