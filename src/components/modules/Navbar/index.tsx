"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/assets/svg";

const Navbar = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  return (
    <div className="py-6 flex flex-row justify-center border-b border-grey-500">
      <div className="w-5/6 flex flex-row justify-between items-center">
        <a href="/">
          <Logo />
        </a>
        <div className="flex flex-row gap-4 items-center">
          {isContactPage ? (
            <p className="text-lg mt-1"> Let&apos;s connect!</p>
          ) : (
            <p className="mt-1">Welcome!</p>
          )}
          {!isContactPage && (
            <a href="/contact">
              <Button variant={"outline"} className="rounded-3xl h-12 text-md">
                Let&apos;s connect?
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;