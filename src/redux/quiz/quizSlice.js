import { createSlice } from "@reduxjs/toolkit";
import {
  getAllQuizzesThunk,
  getFilteredQuizzesThunk,
  getQuizCategoriesThunk,
  getPassedQuizzesThunk,
  getUserQuizzesThunk,
  getTotalPassedThunk,
  getQuizThunk,
  getFavoriteQuizzesThunk,
  createQuizThunk,
  quizResultThunk,
  updateQuizThunk,
  updateFavoriteQuizThunk,
  deleteQuizThunk,
} from "./quizThunks";

const initialState = {
  quizzes: {
    current: null,
    random: [],
    filtered: [],
    passed: [],
    user: [],
    favorites: [],
    total: 0,
  },
  filters: null,
  categories: {
    adult: null,
    children: null,
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) =>{
    builder
      .addCase(getAllQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.random.push(action.payload);
      })
      .addCase(getFilteredQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.filtered.push(action.payload);
      })
      .addCase(getQuizCategoriesThunk.fulfilled, (state, action) => {
        state.categories.adult = action.payload.categoriesAdults;
        state.categories.children = action.payload.categoriesChildren;
      })
      .addCase(getPassedQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.passed.push(action.payload);
      })
      .addCase(getUserQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.user.push(action.payload);
      })
      .addCase(getTotalPassedThunk.fulfilled, (state, action) => {
        state.quizzes.total = action.payload;
      })
      .addCase(getQuizThunk.fulfilled, (state, action) => {
        state.quizzes.current = action.payload;
      })
      .addCase(getFavoriteQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.favorites.push(action.payload);
      })
      .addCase(createQuizThunk.fulfilled, (state, action) => {
        state.quizzes.user.push(action.payload);
      })
      .addCase(quizResultThunk.fulfilled, (state, action) => {
      if (action.payload.userStats)
      {state.quizzes.passed.push(action.payload)}
      state.quizzes.total += 1;
      })
      .addCase(updateQuizThunk.fulfilled, (state, action) => {
        const newUserQuizzes = state.quizzes.user.filter((quiz)=>quiz.id !== action.payload.id)
        state.quizzes.user = [...newUserQuizzes, action.payload]
      })
      .addCase(updateFavoriteQuizThunk.fulfilled, (state, action) => {
        const favoriteIdx = state.quizzes.favorites.find((quiz) => quiz.id === action.payload.id)
        if (favoriteIdx >= 0)
        {state.quizzes.favorites.splice(favoriteIdx, 1)}
        else
        {state.quizzes.favorites.push(action.payload)}
      })
      .addCase(deleteQuizThunk.fulfilled, (state, action) => {
        state.quizzes.user = state.quizzes.user.filter((quiz)=>quiz.id !== action.payload.id)
      })}
});

export const { setFilter } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
