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
    setUserSignout: (state, action) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setUserSignout } = authSlice.actions;
export const selectUserName = (state) => state.auth.name;
export const selectUserEmail = (state) => state.auth.email;
export const selectUserPhoto = (state) => state.auth.photo;

export default authSlice.reducer;
