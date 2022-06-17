import { createSlice } from "@reduxjs/toolkit";

export const currentFilterSlice = createSlice({
  name: "currentFilter",
  initialState: { list: [] },
  reducers: {
    addCurrentFilter: (state, { payload }) => {
      const newItem = { tag: payload.tag, name: payload.name };
      state.list.push(newItem);
    },
    removeCurrentFilter: (state, { payload }) => {
      state.list = payload;
    },
    removeAllFilters: (state, { payload }) => {
      state.list = [];
    },
  },
});

export default currentFilterSlice.reducer;

export const { addCurrentFilter, removeCurrentFilter, removeAllFilters } =
  currentFilterSlice.actions;
