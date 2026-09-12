import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./slices/sampleSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;