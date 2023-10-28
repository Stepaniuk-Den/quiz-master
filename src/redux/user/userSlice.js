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
  user: null,
  token: null,
  statistics: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) =>{
    builder
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.statistics = null;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserStatsThunk.fulfilled, (state, action) => {
        state.statistics = action.payload;
      })}
});

export const userReducer = userSlice.reducer;
