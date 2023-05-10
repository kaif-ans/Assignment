import React from "react";
import Data from "./Data";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

const HomePage = () => {
  const data = Data;

  const [apply, setApply] = React.useState(false);

  function applyJob() {
    setApply((prev) => !prev);
  }
  return (
    <div className="home">
      <Navbar />
      {/* <img
        src="src\images\bg-header-desktop.svg"
        alt="bg"
        className="head-bg"
      /> */}
      {data.map((dt) => (
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
          <div className="role">{dt.role}</div>
          <div className="role">{dt.experience}</div>
          <div className="level">{dt.salary}</div>
          {/* <Button
            variant="contained"
            size="small"
            onClick={applyJob}
            color={apply ? "success" : "primary"}
          >
            {apply ? "Applied" : "Apply"}
          </Button> */}
          <Button variant="contained" size="small">
            Apply
          </Button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
