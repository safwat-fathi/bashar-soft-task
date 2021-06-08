import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// redux toolkit
import { useDispatch, useSelector } from "react-redux";
// redux
import {
  jobsSelectors,
  skillsSelectors,
  fetchJobSkillsById,
} from "../../redux/slices/jobs.slice";

const Jobs = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  // skills selectors
  const skillsAll = useSelector(skillsSelectors.selectAll);
  // jobs selectors
  const jobById = useSelector((state) =>
    jobsSelectors.selectById(state, jobId)
  );

  useEffect(() => {
    dispatch(fetchJobSkillsById(jobId));
    console.log(jobById);
    console.log(skillsAll);
  }, []);

  return (
    <div>
      <h1>JobID: {jobId}</h1>
    </div>
  );
};

export default Jobs;
