// import LogInSlice from "./loginSlice";
// import { combineReducers } from "redux";
// export const  combineReducers =( {
//   auth: LogInSlice,
// });

import { combineReducers } from "redux";
import AuthSlice  from "./loginSlice";
import GetProductListSlice  from "./productSlice";
import UserSlice  from "./userSlice";

export default combineReducers({
  auth: AuthSlice,
  product:GetProductListSlice,
  user:UserSlice
});
