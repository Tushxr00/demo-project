import React, { useContext } from "react";
import StoreContext from "../../store/context-store";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

const Header = () => {
  const store = useContext(StoreContext);
  return (
    <header className="flex  justify-center h-[70px]">
      <div className="flex w-[90vw] justify-between border-b-[2px] border-primary-6 ">
        <p className="text-[22px] text-white self-center font-bold">
          <a className="cursor-pointer" href="/">
            My<span className="text-[22px] text-primary-4">Jobs</span>
          </a>
        </p>
        {!store.isLoggedIn ? <LoginButton /> : <Profile />}
      </div>
    </header>
  );
};

export default Header;
