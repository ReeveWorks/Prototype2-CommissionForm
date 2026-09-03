import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./slices/sampleSlice";

export const store = configureStore({
  reducer: {
    darkmode: sampleReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;