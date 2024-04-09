import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      state.error = null;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    signupSuccess(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
      state.error = null;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    signupFailure(state, action) {
      state.isAuthenticated = false;
      state.error = action.payload;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.error = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  signupSuccess,
  signupFailure,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
