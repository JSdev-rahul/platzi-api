import { cardActionsClasses } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "../asyncThunk/user.asyncThunk";
import { STATUS } from "../constant/reduxHelper";

const initialState = {
  status: "",
  userList: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: () => {},
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      console.log("action", cardActionsClasses);
      state.userList = action?.payload?.reverse();
      state.status = STATUS.FULFILED;
    });
    builder.addCase(getUsersThunk.rejected, (state, action) => {
      state.status = STATUS.REJECT;
    });
  },
});
export const userListState = (state) => state.userList;
// export const { removeToken } = LogInSlice.actions;
export default UserSlice.reducer;
