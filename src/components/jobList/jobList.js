import React from "react";
import "./jobList.scss";
import ListItem from "../listitem/listItem";
import { useSelector } from "react-redux";

function JobList() {
  const list = useSelector((state) => state.jobList.list);

  return (
    <div className="jobList">
      {list.map((job) => (
        <ListItem key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobList;
