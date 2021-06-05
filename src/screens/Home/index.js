import React, { useEffect } from "react";
// ui components
import Card from "../../components/UI/Card";
import Tags from "../../components/UI/Tags";
// redux toolkit
import { useSelector, useDispatch } from "react-redux";
// redux
// import {  } from "../../redux/slices/jobs.slice";

const Home = () => {
  const jobs = useSelector((state) => state.jobs);

  useEffect(() => {
    // dispatch(fetchJobs());
  }, []);

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

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
