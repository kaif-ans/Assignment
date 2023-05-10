import React from "react";
import Data from "./Data";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

const HomePage = () => {
  const data = Data;

  const [jobListingData, setJobListingData] = React.useState(data);

  function handleApplyJob(jobId) {
    const changeSelectedJob = jobListingData.map((j) =>
      j.id === jobId ? { ...j, isApplied: !j.isApplied } : j
    );
    setJobListingData(changeSelectedJob);
  }
  return (
    <div className="home">
      <Navbar />
      {jobListingData.map((dt) => (
        <div className="container">
          <div>
            <img src={dt.logo} />
          </div>
          <div className="comp-detail-div">
            <div className="company">{dt.company}</div>
            <div className="position">{dt.position}</div>
            <div className="time-loc">
              {dt.postedAt} • {dt.contract} • {dt.location}
            </div>
          </div>
          <div className="role">{dt.tools[0]}</div>
          <div className="role">{dt.experience}</div>
          <div className="level">{dt.salary}</div>
          <Button
            variant="contained"
            size="medium"
            onClick={() => handleApplyJob(dt.id)}
            color={dt.isApplied ? "success" : "primary"}
          >
            {dt.isApplied ? "Applied" : "Apply"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
