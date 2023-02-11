import { createSlice } from "@reduxjs/toolkit";
import { getProductListAsyncThunk } from "../asyncThunk/product.asyncThunk";
import { STATUS } from "../constant/reduxHelper";

const initialState = {
  list: [],
  status: "",
  count: "",
};

export const GetProductListSlice = createSlice({
  name: "product",
  initialState,
  reducers: () => {},
  extraReducers: (builder) => {
    builder.addCase(getProductListAsyncThunk.pending, (state, action) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(getProductListAsyncThunk.fulfilled, (state, action) => {
      state.list = action?.payload;
      state.status = STATUS.FULFILED;
    });
    builder.addCase(getProductListAsyncThunk.rejected, (state, action) => {
      state.status = STATUS.REJECT;
    });
  },
});

export const productListState = (state) => state.productStateList;

export default GetProductListSlice.reducer;
