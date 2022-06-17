import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

export const jobListSlice = createSlice({
  name: "jobList",
  initialState: { list: data },
  reducers: {
    addFilter: (state, { payload }) => {
      if (payload.tag === "role") {
        state.list = state.list.filter((job) => job.role === payload.name);
      } else if (payload.tag === "level") {
        state.list = state.list.filter((job) => job.level === payload.name);
      } else if (payload.tag === "languages") {
        state.list = state.list.filter((job) => {
          let a = false;
          job.languages.forEach((item) => {
            if (item === payload.name) {
              a = true;
            }
          });
          return a;
        });
      } else if (payload.tag === "tools") {
        state.list = state.list.filter((job) => {
          let a = false;
          job.tools.forEach((item) => {
            if (item === payload.name) {
              a = true;
            }
          });
          return a;
        });
      }
    },
    removeFilter: (state, { payload }) => {
      if (payload.length === 0) {
        state.list = data;
      } else {
        payload.forEach((item) => {
          if (item.tag === "role") {
            state.list = data.filter((job) => job.role === item.name);
          } else if (item.tag === "level") {
            state.list = data.filter((job) => job.level === item.name);
          } else if (item.tag === "languages") {
            state.list = data.filter((job) => {
              let a = false;
              job.languages.forEach((i) => {
                if (i === item.name) {
                  a = true;
                }
              });
              return a;
            });
          } else if (item.tag === "tools") {
            state.list = data.filter((job) => {
              let a = false;
              job.tools.forEach((i) => {
                if (i === item.name) {
                  a = true;
                }
              });
              return a;
            });
          }
        });
      }
    },
    removeAll: (state, { payload }) => {
      state.list = data;
    },
  },
});

export default jobListSlice.reducer;

export const { addFilter, removeFilter, removeAll } = jobListSlice.actions;
