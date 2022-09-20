import React from "react";

const Card = (props) => {
  return (
    <div
      className={`${props.classes} bg-white  mx-auto`}
      style={{ boxShadow: "0px 30px 36px #557DA526" }}
    >
      {props.children}
    </div>
  );
};

export default Card;
