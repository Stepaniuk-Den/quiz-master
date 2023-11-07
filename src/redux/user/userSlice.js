import { createSlice } from "@reduxjs/toolkit";
import {
  registerUserThunk,
  loginUserThunk,
  currentUserThunk,
  logOutUserThunk,
  updateUserThunk,
  getUserStatsThunk,
} from "./userThunks";

const initialState = {
  user: { name: null, email: null, _id: null },
  token: null,
  // isAuth: false,
  isRefreshing: false,
  statistics: null,
  avatar: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        // state.isAuth = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.isAuth = true;
        state.isRefreshing = false;
      })
      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.user = { name: null, email: null, _id: null };
        state.token = null;
        // state.isAuth = false;
        state.isRefreshing = false;
        state.statistics = null;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.avatar = action.payload.userAvatar;
      })
      .addCase(getUserStatsThunk.fulfilled, (state, action) => {
        state.statistics = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
