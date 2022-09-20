import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import JobCards from "../components/jobs/JobCards";
import { getPostedJobs } from "../helper/api";
const ShowJobs = () => {
  const [jobData, setJobData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getPostedJobs();
  //     if (response.success) {
  //       setJobData(response.data.data);
  //       setTotalCount(response.data.metadata.count);
  //     }
  //   })();
  // }, []);
  console.log({ jobData });
  console.log({ totalCount });
  const navigate = useNavigate();

  return (
    <div className="w-[75vw] mx-auto mt-2 mb-10">
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
              />
            ))}
        </ul>
      )}
      {jobData.length === 0 && <div>hi</div>}
    </div>
  );
};

export default ShowJobs;