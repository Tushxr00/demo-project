import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Overlay = (props) => {
  useEffect(() => {
    let [body] = document.getElementsByTagName("body");
    console.log(body);

    body.classList.add("overflow-hidden");

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="fixed top-0 left-0 w-full h-full z-10 opacity-50 overflow-hidden"
          style={{
            background:
              " transparent linear-gradient(232deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
          }}
          onClick={() => props.close()}
        />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Overlay;
