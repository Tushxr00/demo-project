import React from "react";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className="flex  justify-center h-[70px]">
      <div className="flex w-[90vw] justify-between border-b-[2px] border-primary-6 ">
        <p className="text-[22px] text-white self-center font-bold">
          <a className="cursor-pointer" href="/">
            My<span className="text-[22px] text-primary-4">Jobs</span>
          </a>
        </p>
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
