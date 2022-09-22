import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import noAppliants from "../../assets/noApplicants/curriculum.svg";

const ShowApplicants = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Card classes="z-30 w-[694px] h-[630px] fixed top-0 rounded-[20px] fixed left-1/2 translate-x-[-50%] top-[5.5rem] mx-auto p-10">
          <div className="flex justify-between mb-3">
            <h2 className="text-[19px] text-primary-2">
              Applicants for this job
            </h2>
            <p
              className="h-[15px] w-[15px] text-primary-2 font-bold cursor-pointer"
              onClick={() => props.close()}
            >
              X
            </p>
          </div>
          <p className="pt-3 border-t-[1px] border-primary-2/20 text-[15px] text-primary-2">
            Total {props.data.length} applicaations
          </p>
          <div className="">
            <div
              className="bg-primary-10/20 rounded-[10px] w-full h-[30rem] mt-5 overflow-y-scroll overflow-x-hidden custom-scrollbar"
              style={{
                mixBlendMode: "normal",
              }}
            >
              <div className="gap-4 grid p-3 grid-cols-2 z-30">
                {props.data.length > 0 &&
                  props.data.map((item) => (
                    <Card
                      key={item.id}
                      classes="w-[270px] h-[159px] p-[14px] border-[#303F6080] border-[2px]"
                    >
                      <div className="flex w-fit">
                        <div className="w-[50px] h-[50px] rounded-[100%] bg-[#D9EFFF] order-[2px] relative">
                          <p className="absolute capitalize top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-primary-2 font-bold">
                            {item.name[0]}
                          </p>
                        </div>
                        <div className="ml-4 text-primary-2 w-[180px]">
                          <p className="font-bold">{item.name}</p>
                          <p className="truncate">{item.email}</p>
                        </div>
                      </div>
                      <div className="mt-3 text-primary-2">
                        <p className="text-[13px] font-bold ">Skills</p>
                        <p className="line-clamp-2 text-[15px] mt-1">
                          {item.skills}
                        </p>
                      </div>
                    </Card>
                  ))}
                {props.data.length === 0 && (
                  <div
                    className="absolute top-[50%] left-[50%] translate-x-[-50%]
                      translate-y-[-50%]
                      flex justify-center
                    align-middle my-auto"
                  >
                    <div className="h-[10rem]">
                      <img
                        src={noAppliants}
                        alt="no applicants"
                        className="mx-auto h-[84.92] w-[106.15px] opacity-50"
                      />
                      <p className="text-[20px] text-primary-2 opacity-80 mt-[20px]">
                        No applicants available
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ShowApplicants;
