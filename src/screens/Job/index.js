import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// redux toolkit
import { useDispatch } from "react-redux";
// redux
import { fetchJobSkillsById } from "../../redux/slices/jobs.slice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobId } = useParams();

  useEffect(() => {
    console.log(jobId);
    dispatch(fetchJobSkillsById(jobId));
  }, []);

  return (
    <div>
      <h1>JobID: {jobId}</h1>
    </div>
  );
};

export default Jobs;
