const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    isShowAuthPage: false,
    authForm: '',


  };
  
  export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      toggleShowAuthPage: (state, { payload }) => {
        state.isShowAuthPage = !state.isShowAuthPage;
        state.authForm = payload;
      },

    //   openModal: (state, action) => {
    //     state.isShowAuthPage = true;
    //     state.modalData = action.payload;
    // },
    // closeModal: state => {
    //     state.isShowAuthPage = false;
    //     state.modalData = null;
    // },


    },
  });
  
  export const modalReducer = modalSlice.reducer;
  export const {toggleShowAuthPage} = modalSlice.actions;

  // export const {openModal, closeModal} = modalSlice.actions;