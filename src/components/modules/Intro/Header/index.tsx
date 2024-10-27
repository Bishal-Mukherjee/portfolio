import React, { Fragment } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <Fragment>
      <p className="text-4xl font-bold text-center text-[#2D3092]">
        Fullstack SWE, Cross Platform <br /> App Developer
      </p>

      <p className="text-lg text-center">
        Building high-performance web and mobile applications.
      </p>

      <Image
        src="/images/bishal-mukherjee.png"
        alt="Bishal Mukherjee"
        width={172}
        height={172}
        className="mt-4"
      />
    </Fragment>
  );
};

export default Header;
