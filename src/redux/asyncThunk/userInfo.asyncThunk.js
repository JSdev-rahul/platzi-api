import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_CONSTATNT } from "../constant/ThunkConstant";
import { UserInfoService } from "../services/UserInfo.service";

export const userInfoAsyncThunk = createAsyncThunk(
  ASYNC_CONSTATNT.USER_INFO,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await UserInfoService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
);
