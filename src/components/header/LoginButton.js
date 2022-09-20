import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div className="self-center">
      <button
        className="border-[1px] rounded-[5px] border-primary-4 bg-primary-5 w-[148px] h-[46px] text-white text-[16px] font-bold"
        onClick={() => navigate("/Login")}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
