import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_CONSTATNT } from "../constant/ThunkConstant";
import {
  CreateUserService,
  DeleteUserService,
  GetUserDetailsService,
  GetUsersService,
} from "../services/UserService";

export const getUsersThunk = createAsyncThunk(
  ASYNC_CONSTATNT.GET_USERS,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetUsersService();
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createUserThunk = createAsyncThunk(
  ASYNC_CONSTATNT.CREATE_USER,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CreateUserService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  ASYNC_CONSTATNT.DELETE_USER,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await DeleteUserService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUserDetailsThunk = createAsyncThunk(
  ASYNC_CONSTATNT.GET_USER_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await GetUserDetailsService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
