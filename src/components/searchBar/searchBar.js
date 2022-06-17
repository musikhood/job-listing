import React from "react";
import "./searchbar.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCurrentFilter,
  removeAllFilters,
} from "../../reducer/currentFilterReducer";
import { removeFilter, removeAll } from "../../reducer/jobListReducer";

function SearchBar() {
  const filters = useSelector((state) => state.currentFilter.list);
  const dispatch = useDispatch();
  return (
    <div className="searchBar">
      <div className="filterContainer">
        {filters.map((item, index) => (
          <div
            className="filter"
            key={index}
            onClick={() => {
              const newFilter = filters.filter((item2) => {
                if (item2.name === item.name) {
                  return false;
                }
                return true;
              });
              dispatch(removeCurrentFilter(newFilter));
              dispatch(removeFilter(newFilter));
            }}
          >
            {item.name}
            <div className="remove">
              <img src="./images/icon-remove.svg" alt="remove" />
            </div>
          </div>
        ))}
      </div>
      <div
        className="clear"
        onClick={() => {
          dispatch(removeAllFilters());
          dispatch(removeAll());
        }}
      >
        Clear
      </div>
    </div>
  );
}

export default SearchBar;
