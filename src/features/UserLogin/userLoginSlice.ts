import { createSlice, createAction } from "@reduxjs/toolkit";

type GitHubUser = {
  login: string;
};

type InitialState = {
  accessToken?: string;
  login: boolean;
  user?: GitHubUser;
};

const initialState: InitialState = {
  accessToken: undefined,
  login: false,
};

export const userLoginSlice = createSlice({
  name: "userLoginSlice",
  initialState,
  reducers: {
    setAccessToken: (_, action) => ({
      accessToken: action.payload.access_token,
      login: true,
    }),
    setUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
    }),
  },
});

export const { setAccessToken, setUser } = userLoginSlice.actions;
export const startLogin = createAction("START_LOG_IN");

export default userLoginSlice.reducer;
