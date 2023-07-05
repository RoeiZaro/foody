import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reduxSlices/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
