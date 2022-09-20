import React from "react";

const Modal = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 opacity-50"
      style={{
        background:
          " transparent linear-gradient(232deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
