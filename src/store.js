import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/AuthSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
