import { createSlice } from '@reduxjs/toolkit';
import {getAllReviewsThunk, createReviewThunk} from './feedbackThunks';

const initialState = {
    reviews: [],
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  extraReducers: builder =>{
    builder
      .addCase(getAllReviewsThunk.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(createReviewThunk.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })}
});

export const feedbackReducer = feedbackSlice.reducer;