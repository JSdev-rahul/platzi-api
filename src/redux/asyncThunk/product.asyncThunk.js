import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_CONSTATNT } from "../constant/ThunkConstant";
import { GetProductListService } from "../services/product.service";

export const getProductListAsyncThunk = createAsyncThunk(
  ASYNC_CONSTATNT.GET_PRODUCT_LIST,
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await GetProductListService(payload);
      return responce;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
