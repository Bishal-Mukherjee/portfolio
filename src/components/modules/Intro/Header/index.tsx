import React, { Fragment } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

      <a href="/contact">
        <Button
          variant={"outline"}
          className="rounded-3xl h-12 text-md bg-[#202020] text-white mt-[-8px]"
        >
          Let&apos;s connect?
        </Button>
      </a>
    </Fragment>
  );
};

export default Header;
