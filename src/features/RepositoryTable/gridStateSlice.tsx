import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteringState: [],
  sortingState: [],
  searchState: "",
  columnVisibilityState: [
    "isPrivate",
    "isArchived",
    "isFork",
    "owner",
    "licenseNickname",
    "vulnerabilityAlerts",
    "collaborators",
    "issueCount",
  ],
};

export const gridStateSlice = createSlice({
  name: "gridState",
  initialState,
  reducers: {
    setFilteringState: (state, { payload }: any) => ({
      ...state,
      filteringState: payload,
    }),
    setSortingState: (state, { payload }: any) => ({
      ...state,
      sortingState: payload,
    }),
    setSearchState: (state, { payload }: any) => ({
      ...state,
      searchState: payload,
    }),
    setColumnVisibilityState: (state, { payload }: any) => ({
      ...state,
      searchState: payload,
    }),
  },
});

export const {
  setFilteringState,
  setSortingState,
  setSearchState,
  setColumnVisibilityState,
} = gridStateSlice.actions;

export default gridStateSlice.reducer;
