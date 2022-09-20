import React, { useContext, useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import JobCards from "../components/jobs/JobCards";
import { getOneJobCandidates, getPostedJobs } from "../helper/api";
import writing from "../assets/writing/writing@2x.png";
import Overlay from "../components/UI/Overlay";
import StoreContext from "../store/context-store";
import Modal from "../components/jobs/Modal";

const ShowJobs = () => {
  const [jobData, setJobData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const store = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getPostedJobs();
      if (response.success) {
        setJobData(response.data.data);
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

  return (
    <div className="w-[75vw] h-full mx-auto mt-2 mb-10">
      {store.isModal && <Overlay close={store.hideModal} />}
      {store.isModal && <Modal close={store.hideModal} data={candidates} />}
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
      {jobData.length > 0 && (
        <ul className="grid gap-y-10 gap-x-6 break-1:grid-cols-4 grid-cols-3 mt-4">
          {jobData.length > 0 &&
            jobData.map((item) => (
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
      )}
      {jobData.length === 0 && (
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
