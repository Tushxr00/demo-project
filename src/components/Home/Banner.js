import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/Screenshot 2020-09-21 at 2.06.52 PM/Screenshot 2020-09-21 at 2.06.52 PM edit1.png";
import StoreContext from "../../store/context-store";

const Banner = () => {
  const navigate = useNavigate();
  const store = useContext(StoreContext);
  return (
    <div className="w-[80vw] mx-auto">
      <div className="flex justify-between text-white font-normal">
        <section className="p-7">
          <h1 className="text-[60px] mb-8 mt-16 leading-tight w-[334px] font-[400]">
            Welcome to {""}
            <span className="font-[500] ">
              My<span className="text-primary-4">Jobs</span>
            </span>
          </h1>
          <button
            className="bg-primary-4 w-[148px] h-[46px] rounded-[5px] font-bold"
            onClick={() => {
              store.isLoggedIn ? navigate("/showjobs") : navigate("/login");
            }}
          >
            Get Started
          </button>
        </section>
        <div className="relative h-[396px] w-[622px]">
          <img
            className="rounded-[20px]  absolute top-[15%]"
            src={BannerImage}
            alt="Lady with a laptop"
            style={{ boxShadow: "0px 30px 36px #557DA526" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
