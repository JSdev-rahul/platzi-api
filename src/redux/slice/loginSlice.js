import { createSlice } from "@reduxjs/toolkit";
import { loginAsyncThunk } from "../asyncThunk/login.asyncThunk";
import { userInfoAsyncThunk } from "../asyncThunk/userInfo.asyncThunk";
import { STATUS } from "../constant/reduxHelper";

const initialState = {
  user: [],
  token: null,
  status: null,
};
export const LogInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsyncThunk.pending, (state, action) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
      state.status = STATUS.FULFILED;
      state.token = action?.payload?.access_token;
    });
    builder.addCase(loginAsyncThunk.rejected, (state, action) => {
      state.status = STATUS.REJECT;
    });

    // ?  get User details

    builder.addCase(userInfoAsyncThunk.fulfilled, (state, action) => {
      state.user = action?.payload;
    });
  },
});

export const loginState = (state) => state.loginState;
export const { removeToken } = LogInSlice.actions;
export default LogInSlice.reducer;
