import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
  name: "userLoginSlice",
  initialState: {
    access_token: undefined,
    login: false,
  },
  reducers: {
    setAccessToken: (_, action: PayloadAction<any>) => ({
      access_token: action.payload.access_token,
      login: true,
    }),
  },
});

export const { setAccessToken } = userLoginSlice.actions;

export default userLoginSlice.reducer;
