import { combineReducers } from "redux";
import CartSlice from "./cart";
import AuthSlice from "./loginSlice";
import GetProductListSlice from "./productSlice";
import UserSlice from "./userSlice";

export default combineReducers({
  auth: AuthSlice,
  product: GetProductListSlice,
  user: UserSlice,
  cart: CartSlice,
});
