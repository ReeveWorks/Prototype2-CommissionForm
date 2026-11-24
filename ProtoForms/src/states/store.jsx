import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import formReducer from "./slices/fromSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    formsList: formReducer,
  },
});

export const getRootState = () => store.getState();
export const AppDispatch = store.dispatch;