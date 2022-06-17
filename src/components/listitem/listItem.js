import React from "react";
import "./listItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../reducer/jobListReducer";
import { addCurrentFilter } from "../../reducer/currentFilterReducer";

function ListItem({
  company,
  contract,
  featured,
  languages,
  level,
  location,
  logo,
  recentlyAdded,
  position,
  postedAt,
  role,
  tools,
}) {
  const filters = useSelector((state) => state.currentFilter.list);
  const dispatch = useDispatch();
  return (
    <div className={featured ? "listItem listItem--featured" : "listItem"}>
      <div className="listItem__img-box">
        <img src={logo} alt="logo" />
      </div>
      <div className="listItem__info">
        <div className="about">
          <div className="companyName">{company}</div>
          {recentlyAdded && (
            <div className="new">
              <p>NEW!</p>
            </div>
          )}
          {featured && (
            <div className="new new--featured">
              <p>FEATURED</p>
            </div>
          )}
        </div>
        <p className="position">{position}</p>
        <div className="informations">
          <div className="postedAt">{postedAt}</div>
          <div className="dot"></div>
          <div className="contract">{contract}</div>
          <div className="dot"></div>
          <div className="region">{location}</div>
        </div>
      </div>
      <div className="listItem__line"></div>
      <div className="listItem__tags">
        <div
          className="box"
          onClick={() => {
            let a = true;
            filters.forEach((item) => {
              if (item.name === role) {
                a = false;
              }
            });

            if (a) {
              dispatch(addFilter({ tag: "role", name: role }));
              dispatch(addCurrentFilter({ tag: "role", name: role }));
            }
          }}
        >
          {role}
        </div>
        <div
          className="box"
          onClick={() => {
            let a = true;
            filters.forEach((item) => {
              if (item.name === level) {
                a = false;
              }
            });
            if (a) {
              dispatch(addFilter({ tag: "level", name: level }));
              dispatch(addCurrentFilter({ tag: "level", name: level }));
            }
          }}
        >
          {level}
        </div>
        {languages.map((item, index) => (
          <div
            key={index}
            className="box"
            onClick={() => {
              let a = true;
              filters.forEach((i) => {
                if (i.name === item) {
                  a = false;
                }
              });
              if (a) {
                dispatch(addFilter({ tag: "languages", name: item }));
                dispatch(addCurrentFilter({ tag: "languages", name: item }));
              }
            }}
          >
            {item}
          </div>
        ))}
        {tools.map((item, index) => (
          <div
            key={index}
            className="box"
            onClick={() => {
              let a = true;
              filters.forEach((i) => {
                if (i.name === item) {
                  a = false;
                }
              });
              if (a) {
                dispatch(addFilter({ tag: "tools", name: item }));
                dispatch(addCurrentFilter({ tag: "tools", name: item }));
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItem;
