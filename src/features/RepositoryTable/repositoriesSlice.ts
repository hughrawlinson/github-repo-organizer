import { createAction, createSlice } from "@reduxjs/toolkit";
import { Repository } from ".";

type StateType = {
  repositories: Repository[];
};

const initialState: StateType = {
  repositories: [],
};

const repositoriesSlice = createSlice({
  name: "repositories",
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

export const {
  setRepositories,
  deleteRepositories,
} = repositoriesSlice.actions;

export const refresh = createAction("REFRESH_REPOSITORIES");

export default repositoriesSlice.reducer;
