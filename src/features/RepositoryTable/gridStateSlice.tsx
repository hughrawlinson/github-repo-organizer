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
    setGridState: (_, { payload }: any) => payload,
  },
});

export const { setGridState } = gridStateSlice.actions;

export default gridStateSlice.reducer;
