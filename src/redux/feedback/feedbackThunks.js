import { createAsyncThunk } from '@reduxjs/toolkit';
import {getAllReviews, createReview} from '../../api/feedback';

export const getAllReviewsThunk = createAsyncThunk(
    'feedback/getAll',
    async (pagination, thunkAPI) => {
      try {
        const data = await getAllReviews(pagination);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

export const createReviewThunk = createAsyncThunk(
    'feedback/addReview',
    async (review, thunkAPI) => {
        try {
          const data = await createReview(review);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data);
        }
      }
);
  