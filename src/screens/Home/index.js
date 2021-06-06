import React, { useEffect } from "react";
// ui components
import Card from "../../components/UI/Card";
import Spinner from "../../components/UI/Spinner";
// import Tags from "../../components/UI/Tags";
// redux toolkit
import { useSelector } from "react-redux";
// redux
import { jobsSelectors } from "../../redux/slices/jobs.slice";

const Home = () => {
  // let id = "0cfb09fa1c6691fd6d77a3d3743fa8bc";
  const jobsAll = useSelector(jobsSelectors.selectAll);
  // const selectJobById = useSelector((state) =>
  //   jobsSelectors.selectById(state, id)
  // );
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {}, []);

  console.log(status);

  if (status === "loading") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {jobsAll.slice(0, -1).map((job) => {
        return <Card title={job.title} id={job.uuid} key={job.uuid} />;
      })}
    </>
  );
};

export default Home;
