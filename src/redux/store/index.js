import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import rootReducers  from "../slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {persistStore} from 'redux-persist'
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList : ["auth"]
};

export const persitedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persitedReducer,
  middleware: [thunk],
  
});
export const persistor = persistStore(store)