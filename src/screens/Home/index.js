import React, { useEffect } from "react";
// ui components
import Card from "../../components/UI/Card";
import Spinner from "../../components/UI/Spinner";
import CardsContainer from "../../components/layout/CardsContainer";
import Sidebar from "../../components/layout/Sidebar";
// import Tags from "../../components/UI/Tags";
// redux toolkit
import { useSelector } from "react-redux";
// redux
import { jobsSelectors } from "../../redux/slices/jobs.slice";

const Home = () => {
  const jobsAll = useSelector(jobsSelectors.selectAll);
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {
    console.log(jobsAll);
  }, []);

  if (status === "loading") {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <CardsContainer>
        {jobsAll.map((job) => {
          return <Card title={job.title} id={job.uuid} key={job.uuid} />;
        })}
      </CardsContainer>
      <Sidebar />
    </>
  );
};

export default Home;
