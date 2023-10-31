import { createSlice } from "@reduxjs/toolkit";
import {
  getRandomQuizzesThunk,
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

const quizzesArr = [
  {
    _id: "653b7ab5frvf4cc7fb04f0a2",
    quizName: "Quiz 1",
    rate: 5.0,
    totalPassed: 10,
    categoryName: "Science",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f1tr44cc7fb04f0a2",
    quizName: "Quiz 2",
    rate: 4.6,
    totalPassed: 15,
    categoryName: "Science",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18hjkcc7fb04f0a2",
    quizName: "Quiz 3",
    rate: 4.3,
    totalPassed: 20,
    categoryName: "Sport",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4rerefb04f0a2",
    quizName: "Quiz 4",
    rate: 4.0,
    totalPassed: 12,
    categoryName: "Sport",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4tyrer7fb04f0a2",
    quizName: "Quiz 5",
    rate: 3.0,
    totalPassed: 18,
    categoryName: "Comics",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18berr7fb04f0a2",
    quizName: "Quiz 6",
    rate: 4.9,
    totalPassed: 9,
    categoryName: "Comics",
    quizType: "adult",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
  {
    _id: "653b7ab5f18b4cc7fb04frr",
    quizName: "Quiz 7",
    rate: 5.0,
    totalPassed: 22,
    categoryName: "Books",
    quizType: "children",
    quizCategory: "65398da95191746edd434971",
    isFavorite: true,
  },
];
const initialState = {
  quizzes: {
    current: null,
    random: {
      adult: null,
      children: null,
    },
    filtered: quizzesArr,
    passed: quizzesArr,
    ownQuizes: quizzesArr,
    favorites: quizzesArr,    
    total: 129865,
  },
  filters: null,

  categoryType: {
    adult: [
      {
        _id: "65398ba45191746edd43494c",
        categoryName: "Cars",
        categoryType: "adults",
      },
      {
        _id: "65398bca5191746edd43494f",
        categoryName: "Architecture",
        categoryType: "adults",
      },
      {
        _id: "65398bdb5191746edd434952",
        categoryName: "Science",
        categoryType: "adults",
      },
    ],
    children: [
      {
        _id: "65398dc95191746edd434974",
        categoryName: "Nature",
        categoryType: "children",
      },
      {
        _id: "65398e175191746edd43497d",
        categoryName: "Comics",
        categoryType: "children",
      },
      {
        _id: "65398e365191746edd434980",
        categoryName: "Literature",
        categoryType: "children",
      },
    ],
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
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuizzesThunk.fulfilled, (state, action) => {
        const allQuizzes = action.payload;
        allQuizzes.forEach((quiz) => {
          if (quiz.quizType === "adults") state.quizzes.random.adult.push(quiz);
          if (quiz.quizType === "children")
            state.quizzes.random.children.push(quiz);
        });
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
        if (action.payload.userStats) {
          state.quizzes.passed.push(action.payload);
        }
        state.quizzes.total += 1;
      })
      .addCase(updateQuizThunk.fulfilled, (state, action) => {
        const newUserQuizzes = state.quizzes.user.filter(
          (quiz) => quiz.id !== action.payload.id
        );
        state.quizzes.user = [...newUserQuizzes, action.payload];
      })
      .addCase(updateFavoriteQuizThunk.fulfilled, (state, action) => {
        const favoriteIdx = state.quizzes.favorites.find(
          (quiz) => quiz.id === action.payload.id
        );
        if (favoriteIdx >= 0) {
          state.quizzes.favorites.splice(favoriteIdx, 1);
        } else {
          state.quizzes.favorites.push(action.payload);
        }
      })
      .addCase(deleteQuizThunk.fulfilled, (state, action) => {
        state.quizzes.user = state.quizzes.user.filter(
          (quiz) => quiz.id !== action.payload.id
        );
      });
  },
});

export const { setFilter } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
