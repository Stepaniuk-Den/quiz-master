const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isShowAuthPage: false,
  authForm: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowAuthPage: (state, { payload }) => {
      state.isShowAuthPage = !state.isShowAuthPage;
      state.authForm = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowAuthPage } = modalSlice.actions;
