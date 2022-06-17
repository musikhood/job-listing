import React from "react";
import "./container.scss";
import SearchBar from "../searchBar/searchBar";
import JobList from "../jobList/jobList";
import { useSelector } from "react-redux";

function Container() {
  const filters = useSelector((state) => state.currentFilter.list);
  return (
    <div
      className={
        filters.length !== 0 ? "container" : "container container--lower"
      }
    >
      {filters.length !== 0 && <SearchBar />}
      <JobList />
    </div>
  );
}

export default Container;
