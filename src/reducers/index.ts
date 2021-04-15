import { createAction, createSlice } from "@reduxjs/toolkit";
import { Repository } from "../sagas";

const initialGridState = {
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

export type GridState = typeof initialGridState;

type GitHubUser = {
  login: string;
};

type StateType = {
  loggedIn: boolean;
  gridState: GridState;
  repositories: Repository[];
  accessToken?: string;
  user?: GitHubUser;
};

const initialState: StateType = {
  loggedIn: false,
  gridState: initialGridState,
  repositories: [],
  accessToken: undefined,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, { payload }) => ({
      ...state,
      accessToken: payload.access_token,
      loggedIn: true,
    }),
    setRepositories: (state, { payload }) => ({
      ...state,
      repositories: [...(state.repositories || []), ...payload.repositories],
    }),
    deleteRepositories: (state) => ({
      ...state,
      repositories: [],
    }),
    setUser: (state, { user }: any) => ({
      ...state,
      user,
    }),
    setGridState: (state, { gridState }: any) => ({
      ...state,
      gridState,
    }),
  },
});

export const {
  setAccessToken,
  setRepositories,
  deleteRepositories,
  setUser,
  setGridState,
} = mainSlice.actions;

export const startLogin = createAction("START_LOG_IN");
export const refresh = createAction("REFRESH_REPOSITORIES");

export default mainSlice.reducer;
