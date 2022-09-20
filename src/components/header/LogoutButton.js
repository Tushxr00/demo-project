import React, { useContext, useEffect } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import StoreContext from "../../store/context-store";
import Card from "../UI/Card";

const LogoutButton = (props) => {
  const store = useContext(StoreContext);
  const checkClick = (event) => {
    let eventClass;

    const checkEvent = event.target.className;
    if (typeof checkEvent !== "string") {
      eventClass = JSON.stringify(checkEvent.baseVal);
    }

    if (typeof checkEvent === "string") {
      eventClass = checkEvent;
    }
    if (eventClass.includes("showLoginPopUp")) return;
    if (event.path[0].getAttribute("d")) return;
    props.close();
  };
  useEffect(() => {
    window.addEventListener("click", checkClick);
    return () => {
      window.removeEventListener("click", checkClick);
    };
  }, []);

  return (
    <div className="relative">
      <Card classes="w-[100px] h-[40px] absolute top-[3.9rem] rounded-[10px] left-[-6rem] logoutPopUp">
        <AiFillCaretUp className="text-white absolute left-[70%] top-[-17px] h-[25px] w-[25px]" />
        <button
          className="cursor-pointer ml-4 mt-2 text-primary-2 text-[14px] logoutPopUp"
          onClick={() => store.onLogout()}
        >
          Logout
        </button>
      </Card>
    </div>
  );
};

export default LogoutButton;
