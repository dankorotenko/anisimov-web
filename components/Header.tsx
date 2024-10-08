import Link from "next/link";
import React from "react";
import CurrentTime from "./CurrentTime";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full pt-4 md:pt-6 pb-4 z-[3] will-change-transform">
      <div className="realtive grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 items-center w-full mx-auto px-4 md:px-8">
        <Link
          href="/"
          className="font-clash font-bold text-primary text-xl col-start-1 col-end-3 md:col-end-5"
        >
          anisimov
        </Link>
        <button className="cursor-pointer col-start-3 col-end-5 md:col-start-5 md:col-end-9 text-right md:text-center">
          <span className="font-clash font-bold text-lg">menu</span>
        </button>
        <CurrentTime />
      </div>
    </header>
  );
};

export default Header;
