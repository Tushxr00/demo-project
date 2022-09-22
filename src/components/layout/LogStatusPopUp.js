import React from "react";
import Card from "../UI/Card";
import { AiOutlineClose } from "react-icons/ai";
const LogStatusPopUp = (props) => {
  return (
    <div className=" z-10 absolute top-[5rem] right-[4rem]">
      <Card classes="rounded-[5px] w-[343px] h-[99px] p-4">
        <div className="flex justify-between">
          <h2 className="text-[24px] text-primary-4 font-[500]">
            {props.title}
          </h2>
          <div
            className="text-[25px] cursor-pointer font-bold absolute top-[3px] left-[92%] text-primary-2"
            onClick={() => props.close()}
          >
            <AiOutlineClose />
          </div>
        </div>
        <p className="text-[17px] text-primary-2 mt-1">{props.text}</p>
      </Card>
    </div>
  );
};

export default LogStatusPopUp;
