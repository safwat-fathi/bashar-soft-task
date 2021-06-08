import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// layout components
import PanelsContainer from "../../components/layout/PanelsContainer";
import Sidebar from "../../components/layout/Sidebar";
// ui components
import Spinner from "../../components/UI/Spinner";
import Panel from "../../components/UI/Panel";
// redux toolkit
import { useDispatch, useSelector } from "react-redux";
// redux
import {
  jobsSelectors,
  skillsSelectors,
  relatedJobsSelectors,
  fetchJobSkillsById,
  fetchJobRelatedJobsById,
} from "../../redux/slices/jobs.slice";

const Jobs = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();
  // skills selectors
  const skillsAll = useSelector(skillsSelectors.selectAll);
  // skills status
  const skillsStatus = useSelector((state) => state.jobs.skills.status);
  // jobs selectors
  const jobById = useSelector((state) =>
    jobsSelectors.selectById(state, jobId)
  );
  // related jobs selectors
  const relatedJobs = useSelector(relatedJobsSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchJobSkillsById(jobId));
    dispatch(fetchJobRelatedJobsById(jobId));
  }, []);

  console.log(relatedJobs);

  if (skillsStatus === "loading") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <h1>{jobById.title}</h1>
      <PanelsContainer>
        {skillsAll.map(
          ({
            skill_uuid,
            skill_name,
            skill_type,
            description,
            importance,
            level,
          }) => {
            return (
              <Panel
                key={skill_uuid}
                title={skill_name}
                type={skill_type}
                description={description}
                importance={importance}
                level={level}
              />
            );
          }
        )}
      </PanelsContainer>
      <Sidebar title={"Related Jobs"} items={relatedJobs} />
    </>
  );
};

export default Jobs;
