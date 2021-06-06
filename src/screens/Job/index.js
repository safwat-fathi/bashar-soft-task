import React from "react";
import { useParams } from "react-router-dom";

const Jobs = () => {
  const { jobId } = useParams();

  console.log(jobId);

  return (
    <div>
      <h1>JobID: {jobId}</h1>
    </div>
  );
};

export default Jobs;
