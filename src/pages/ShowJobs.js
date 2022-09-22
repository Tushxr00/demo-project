import React, { useContext, useEffect, useState } from "react";
import { AiFillHome, AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import JobCards from "../components/jobs/JobCards";
import { getOneJobCandidates, getPostedJobs } from "../helper/api";
import writing from "../assets/writing/writing@2x.png";
import Overlay from "../components/UI/Overlay";
import StoreContext from "../store/context-store";
import ShowApplicants from "../components/jobs/ShowApplicants";
import ReactPaginate from "react-paginate";

const ShowJobs = () => {
  const [jobData, setJobData] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const store = useContext(StoreContext);
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getPostedJobs();
      if (response.success) {
        setJobData((prevState) => {
          return { ...prevState, 1: response.data.data };
        });
        setTotalCount(response.data.metadata.count);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let response;
      if (store.jobId.trim().length > 0) {
        response = await getOneJobCandidates(store.jobId);
      }
      if (response?.success) {
        setCandidates(response.data);
      }
    })();
  }, [store.jobId]);

  const pageChange = async (page) => {
    const pageArray = Object.keys(jobData);
    const pageCheck = pageArray.find((item) => item === page);
    if (!pageCheck) {
      const response = await getPostedJobs(page);
      if (response.success) {
        setJobData((prevState) => {
          return { ...prevState, [page]: response.data.data };
        });
      }
    }
  };

  return (
    <div className="w-[75vw] h-full mx-auto mt-2 mb-10">
      {store.isModal && <Overlay close={store.hideModal} />}
      {store.isModal && (
        <ShowApplicants close={store.hideModal} data={candidates} />
      )}
      <h4 className="text-white text-[12px] flex">
        <AiFillHome
          className="h-3 w-3 self-center cursor-pointer"
          onClick={() => navigate("/")}
        />{" "}
        <span
          className="ml-1 self-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </span>
      </h4>
      <h1 className="text-[22px] font-bold text-white mt-[1.5rem]">
        Jobs posted by you
      </h1>
      {Object.keys(jobData).length > 0 && (
        <>
          <ul className=" grid gap-y-10 gap-x-6 break-1:grid-cols-4 grid-cols-3 mt-4">
            {jobData?.[pageNo]?.map((item) => (
              <JobCards
                title={item.title}
                id={item.id}
                key={item.id}
                description={item.description}
                location={item.location}
                action={store.showModal}
              />
            ))}
          </ul>
          <ReactPaginate
            className="flex  justify-center mt-8 mb-12"
            pageClassName="h-[30px] w-[30px] border-primary-2/50 border-[2px] text-primary-2/50 mx-2 rounded-md text-center text-[0.9rem] pt-[0.2rem]"
            nextClassName="text-white"
            previousClassName="text-red-700"
            activeClassName="border-none bg-primary-4/40"
            breakLabel="..."
            nextLabel={
              <div className="h-[30px] w-[30px] border-primary-2/50 border-[2px] text-primary-2/50 rounded-md ml-1">
                <AiFillCaretRight className="h-[17px] w-[17px] mx-auto mt-[0.3rem]" />
              </div>
            }
            previousLabel={
              <div className="h-[30px] w-[30px] border-primary-2/50 border-[2px] text-primary-2/50 rounded-md mr-1">
                <AiFillCaretLeft className="h-[17px] w-[17px] mx-auto mt-[0.3rem]" />
              </div>
            }
            onPageChange={async (e) => {
              await pageChange(e.selected + 1);
              setPageNo(e.selected + 1);
            }}
            pageRangeDisplayed={0}
            pageCount={Math.ceil(totalCount / 20)}
          />
        </>
      )}
      {Object.keys(jobData).length === 0 && (
        <div className="flex w-full h-[100vh] justify-center align-middle">
          <div className="m-10 mt-[13rem]">
            <img
              src={writing}
              alt="Post a job"
              className="w-[106.15px] h-[106.15px] opacity-50 mx-auto pl-2"
            />
            <p className="text-[20px] mx-auto text-primary-2 mt-5 ">
              Your posted jobs will show here
            </p>
            <button className="block w-[148px] mx-auto h-[46px] bg-primary-4 text-white rounded-[5px] px-[34px] py-[14x] mt-5">
              Post a Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowJobs;
