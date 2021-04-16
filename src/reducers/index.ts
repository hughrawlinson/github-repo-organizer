import { createAction, createSlice } from "@reduxjs/toolkit";
import { Repository } from "../features/RepositoryTable";

type StateType = {
  repositories: Repository[];
};

const initialState: StateType = {
  repositories: [],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setRepositories: (state, { payload }) => ({
      ...state,
      repositories: [...(state.repositories || []), ...payload.repositories],
    }),
    deleteRepositories: (state) => ({
      ...state,
      repositories: [],
    }),
  },
});

export const { setRepositories, deleteRepositories } = mainSlice.actions;

export const refresh = createAction("REFRESH_REPOSITORIES");

export default mainSlice.reducer;
