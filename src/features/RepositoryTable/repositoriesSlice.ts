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

type RequiredType = {
  accessToken: string;
  login: string;
};

export const refresh = createAction<RequiredType>("REFRESH_REPOSITORIES");
export const loadReposWithAccessToken = createAction<RequiredType>(
  "LOAD_REPOS_WITH_ACCESS_TOKEN"
);

export default repositoriesSlice.reducer;
