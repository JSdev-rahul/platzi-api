import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_CONSTATNT } from "../constant/ThunkConstant";
import { LogInService } from "../services/logInService";

// ? LOGIN ASYNCTHUNK

export const loginAsyncThunk = createAsyncThunk(
  ASYNC_CONSTATNT.LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await LogInService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
