import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_CONSTATNT } from "../constant/ThunkConstant";
import {
  getCategoryListService,
  GetProductDetailsService,
  getProductListByCategoryService,
  GetProductListService,
} from "../services/product.service";

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

// ? getCategoryList AsyncThunk

export const getCategoryListAsncThunk = createAsyncThunk(
  ASYNC_CONSTATNT.CATEGORY_LISt,
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await getCategoryListService(payload);
      return responce;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// ? getproductDetails

export const getProductDetailsThunk = createAsyncThunk(
  ASYNC_CONSTATNT.GET_PRODUCT_DETAILS,
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await GetProductDetailsService(payload);
      return responce;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
