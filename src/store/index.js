import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./Cart-slice";

export const store = configureStore({
  reducer: {},
});

export default store;
