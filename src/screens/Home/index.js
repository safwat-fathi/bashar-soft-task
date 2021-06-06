import React, { useEffect } from "react";
// ui components
import Card from "../../components/UI/Card";
import Tags from "../../components/UI/Tags";
// redux toolkit
import { useSelector } from "react-redux";
// redux
import { jobsSelectors } from "../../redux/slices/jobs.slice";

const Home = () => {
  let id = "0cfb09fa1c6691fd6d77a3d3743fa8bc";
  const jobsEntities = useSelector(jobsSelectors.selectEntities);
  const jobsTotal = useSelector(jobsSelectors.selectTotal);
  const selectJobById = useSelector((state) =>
    jobsSelectors.selectById(state, id)
  );
  // const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    // dispatch(fetchJobs());
  }, []);

  // console.log(jobsEntities);
  console.log(selectJobById);
  // useEffect(() => {

  // }, [jobsTotal]);

  // console.log(jobsIds);

  return (
    <>
      <h1>Home</h1>
      <div className="cards">
        <Card children={<Tags />} />
        <Card children={<Tags />} />
        <Card children={<Tags />} />
      </div>
      <aside className="app-sidebar">
        <h1>app-sidebar</h1>
      </aside>
    </>
  );
};

export default Home;
