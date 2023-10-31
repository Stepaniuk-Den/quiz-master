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
    random: {
      adult: [
        {
            _id: "653b7ab5frvf4cc7fb04f0a2",
            quizName: "Quiz 1",
            rate: 0,
            totalPassed: 10,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f1tr44cc7fb04f0a2",
            quizName: "Quiz 2",
            rate: 0,
            totalPassed: 15,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18hjkcc7fb04f0a2",
            quizName: "Quiz 3",
            rate: 0,
            totalPassed: 20,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4rerefb04f0a2",
            quizName: "Quiz 4",
            rate: 0,
            totalPassed: 12,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4tyrer7fb04f0a2",
            quizName: "Quiz 5",
            rate: 0,
            totalPassed: 18,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18berr7fb04f0a2",
            quizName: "Quiz 6",
            rate: 0,
            totalPassed: 9,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4cc7fb04frr",
            quizName: "Quiz 7",
            rate: 0,
            totalPassed: 22,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        }
      ],
      children: [
        {
            _id: "653b7ab5f18bjfkjc7fb04f0a2",
            quizName: "Quiz 1",
            rate: 0,
            totalPassed: 10,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4cc784804f0a2",
            quizName: "Quiz 2",
            rate: 0,
            totalPassed: 15,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4cc7fj3jf0a2",
            quizName: "Quiz 3",
            rate: 0,
            totalPassed: 20,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4vfm4b04f0a2",
            quizName: "Quiz 4",
            rate: 0,
            totalPassed: 12,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5kl47fb04f0a2",
            quizName: "Quiz 5",
            rate: 0,
            totalPassed: 18,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7ab5f18b4j4b04f0a2",
            quizName: "Quiz 6",
            rate: 0,
            totalPassed: 9,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        },
        {
            _id: "653b7abr7fb04f0a2",
            quizName: "Quiz 7",
            rate: 0,
            totalPassed: 22,
            quizCategory: "65398da95191746edd434971",
            isFavorite: false
        }
      ],
    },
    filtered: [{
        _id: "653b7ab5frvf4cc7fb04f0a2",
        quizName: "Quiz 1",
        rate: 0,
        totalPassed: 10,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f1tr44cc7fb04f0a2",
        quizName: "Quiz 2",
        rate: 0,
        totalPassed: 15,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18hjkcc7fb04f0a2",
        quizName: "Quiz 3",
        rate: 0,
        totalPassed: 20,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4rerefb04f0a2",
        quizName: "Quiz 4",
        rate: 0,
        totalPassed: 12,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4tyrer7fb04f0a2",
        quizName: "Quiz 5",
        rate: 0,
        totalPassed: 18,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18berr7fb04f0a2",
        quizName: "Quiz 6",
        rate: 0,
        totalPassed: 9,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4cc7fb04frr",
        quizName: "Quiz 7",
        rate: 0,
        totalPassed: 22,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    }],
    passed: [{
        _id: "653b7ab5frvf4cc7fb04f0a2",
        quizName: "Quiz 1",
        rate: 0,
        totalPassed: 10,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f1tr44cc7fb04f0a2",
        quizName: "Quiz 2",
        rate: 0,
        totalPassed: 15,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18hjkcc7fb04f0a2",
        quizName: "Quiz 3",
        rate: 0,
        totalPassed: 20,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4rerefb04f0a2",
        quizName: "Quiz 4",
        rate: 0,
        totalPassed: 12,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4tyrer7fb04f0a2",
        quizName: "Quiz 5",
        rate: 0,
        totalPassed: 18,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18berr7fb04f0a2",
        quizName: "Quiz 6",
        rate: 0,
        totalPassed: 9,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    },
    {
        _id: "653b7ab5f18b4cc7fb04frr",
        quizName: "Quiz 7",
        rate: 0,
        totalPassed: 22,
        quizCategory: "65398da95191746edd434971",
        isFavorite: false
    }],
    ownQuizes: [{
      _id: "653b7ab5frvf4cc7fb04f0a2",
      quizName: "Quiz 1",
      rate: 5.0,
      totalPassed: 10,
      categoryName: "Science",
      quizType: "children",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f1tr44cc7fb04f0a2",
      quizName: "Quiz 2",
      rate: 4.6,
      totalPassed: 15,
      categoryName: "Science",
      quizType: "adult",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f18hjkcc7fb04f0a2",
      quizName: "Quiz 3",
      rate: 4.3,
      totalPassed: 20,
      categoryName: "Sport",
      quizType: "children",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f18b4rerefb04f0a2",
      quizName: "Quiz 4",
      rate: 4.0,
      totalPassed: 12,
      categoryName: "Sport",
      quizType: "adult",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f18b4tyrer7fb04f0a2",
      quizName: "Quiz 5",
      rate: 3.0,
      totalPassed: 18,
      categoryName: "Comics",
      quizType: "children",        
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f18berr7fb04f0a2",
      quizName: "Quiz 6",
      rate: 4.9,
      totalPassed: 9,
      categoryName: "Comics",
      quizType: "adult",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  },
  {
      _id: "653b7ab5f18b4cc7fb04frr",
      quizName: "Quiz 7",
      rate: 5.0,
      totalPassed: 22,
      categoryName: "Books",
      quizType: "children",
      quizCategory: "65398da95191746edd434971",
      isFavorite: true
  }],
    favorites: [{
        _id: "653b7ab5frvf4cc7fb04f0a2",
        quizName: "Quiz 1",
        rate: 5.0,
        totalPassed: 10,
        categoryName: "Science",
        quizType: "children",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f1tr44cc7fb04f0a2",
        quizName: "Quiz 2",
        rate: 4.6,
        totalPassed: 15,
        categoryName: "Science",
        quizType: "adult",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f18hjkcc7fb04f0a2",
        quizName: "Quiz 3",
        rate: 4.3,
        totalPassed: 20,
        categoryName: "Sport",
        quizType: "children",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f18b4rerefb04f0a2",
        quizName: "Quiz 4",
        rate: 4.0,
        totalPassed: 12,
        categoryName: "Sport",
        quizType: "adult",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f18b4tyrer7fb04f0a2",
        quizName: "Quiz 5",
        rate: 3.0,
        totalPassed: 18,
        categoryName: "Comics",
        quizType: "children",        
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f18berr7fb04f0a2",
        quizName: "Quiz 6",
        rate: 4.9,
        totalPassed: 9,
        categoryName: "Comics",
        quizType: "adult",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    },
    {
        _id: "653b7ab5f18b4cc7fb04frr",
        quizName: "Quiz 7",
        rate: 5.0,
        totalPassed: 22,
        categoryName: "Books",
        quizType: "children",
        quizCategory: "65398da95191746edd434971",
        isFavorite: true
    }],
    total: 129865,
  },
  filters: null,
  
  categoryType: {
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
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuizzesThunk.fulfilled, (state, action) => {
        if (action.payload.quizAdult) {
          state.quizzes.random.adult.push(action.payload.quizAdult);
        }
        if (action.payload.quizChildren) {
          state.quizzes.random.push(action.payload.quizChildren);
        }
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
