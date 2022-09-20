import React from "react";
import Card from "../UI/Card";
import { GoLocation } from "react-icons/go";
const JobCards = (props) => {
  return (
    <Card classes="w-[260px] h-[162px] rounded-[5px] p-[15px] ">
      <h2 className="text-[17px] text-primary-2 font-semibold truncate">
        {props?.title}
      </h2>
      <p className="  text-[14px] leading-4 text-primary-2 mt-2 h-[64px] break-words">
        <span className="line-clamp-3">{props?.description}</span>
      </p>
      <div className="flex justify-between mt-2">
        <h3 className="flex text-[14px] text-primary-2 capitalize self-center ">
          <GoLocation className="text-primary-4 self-center mr-1" />
          <p className="truncate break-words w-[5rem]">{props?.location}</p>
        </h3>
        <button className="text-[12px] bg-primary-5 text-primary-2 border-[2px] rounded-[5px] w-[125px] h-[32px] mx-[9px]">
          View Apllicants
        </button>
      </div>
    </Card>
  );
};

export default JobCards;
