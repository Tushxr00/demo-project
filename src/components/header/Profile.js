import React, { useContext, useEffect, useState } from "react";
import StoreContext from "../../store/context-store";
import { AiFillCaretDown } from "react-icons/ai";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const store = useContext(StoreContext);

  return (
    <>
      <div className="flex self-center">
        <div className="w-[46px] h-[46px] rounded-[100%] bg-[#D9EFFF] order-[2px] relative">
          <p
            className="absolute  top-[50%] left-[50%] translate-x-[-50%] showLoginPopUp translate-y-[-50%] text-primary-2 font-bold text-xl cursor-pointer capitalize"
            onClick={() => setOpenLogoutModal(true)}
          >
            {store.email?.[0]}
          </p>
        </div>
        <AiFillCaretDown
          className="self-center cursor-pointer text-white ml-[5px] showLoginPopUp"
          onClick={() => setOpenLogoutModal(true)}
        />
        {openLogoutModal && (
          <LogoutButton close={() => setOpenLogoutModal(false)} />
        )}
      </div>
    </>
  );
};

export default Profile;
