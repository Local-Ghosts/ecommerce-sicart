import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogout: (state, action) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});
