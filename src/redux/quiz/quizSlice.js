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
  passedUsersQuiz,
  updateUsersQuiz
} from "./quizThunks";
import { notifyBtnHeartSuccess, notifyQuizDeletedSuccess } from "../../shared/NotificationToastify/Toasts";

const initialState = {
  quizzes: {
    current: null,
    random: {
      adult: [],
      children: [],
    },    
    filtered: [],
    filteredQty: null,
    passed: [],
    ownQuizes: [],
    ownQuizesQty: null,
    favorites: [],
    favoritesQty: null,
    total: null,
  },
  filters: null,

  allCategories: null,

  categoryType: {
    adult: [
      // {
      //   _id: "65398ba45191746edd43494c",
      //   categoryName: "Cars",
      //   categoryType: "adults",
      // },
      // {
      //   _id: "65398bca5191746edd43494f",
      //   categoryName: "Architecture",
      //   categoryType: "adults",
      // },
      // {
      //   _id: "65398bdb5191746edd434952",
      //   categoryName: "Science",
      //   categoryType: "adults",
      // },
      // {
      //   _id: "65398beb5191746edd434955",
      //   categoryName: "History",
      //   categoryType: "adults",
      // },
    ],
    children: [
      // {
      //   _id: "65398dc95191746edd434974",
      //   categoryName: "Nature",
      //   categoryType: "children",
      // },
      // {
      //   _id: "65398e175191746edd43497d",
      //   categoryName: "Comics",
      //   categoryType: "children",
      // },
      // {
      //   _id: "65398e365191746edd434980",
      //   categoryName: "Literature",
      //   categoryType: "children",
      // },
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
    updateFiltered: (state, action) => {      
      state.quizzes.filtered = action.payload;
    },
    updateFavorite: (state, action) => {      
      state.quizzes.favorites = action.payload;
    },
    updateOwnQuizes: (state, action) => {      
      state.quizzes.ownQuizes = action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(passedUsersQuiz.fulfilled, (state, action) => {
      })
      .addCase(updateUsersQuiz.fulfilled, (state, action) => {
      })
      .addCase(getRandomQuizzesThunk.fulfilled, (state, action) => {
        const allQuizzes = action.payload;
        if (allQuizzes.adults) {
          state.quizzes.random.adult.push(...allQuizzes.adults.quizzes);
        }
        if (allQuizzes.children) {
          state.quizzes.random.children.push(...allQuizzes.children.quizzes);
        }
      })      
      .addCase(getFilteredQuizzesThunk.fulfilled, (state, action) => {                
        state.quizzes.filtered = [...state.quizzes.filtered, ...action.payload.data];
        state.quizzes.filteredQty = action.payload.totalQuiz;
      })      
      .addCase(getQuizCategoriesThunk.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(getPassedQuizzesThunk.fulfilled, (state, action) => {
        state.quizzes.passed = action.payload;
      })
      .addCase(getUserQuizzesThunk.fulfilled, (state, action) => {        
        state.quizzes.ownQuizes = [...state.quizzes.ownQuizes, ...action.payload.data];        
        state.quizzes.ownQuizesQty = action.payload.totalQuiz;
      })
      .addCase(getTotalPassedThunk.fulfilled, (state, action) => {
        state.quizzes.total = action.payload;
      })
      .addCase(getQuizThunk.fulfilled, (state, action) => {
        state.quizzes.current = action.payload;
      })
      .addCase(getFavoriteQuizzesThunk.fulfilled, (state, action) => {        
        state.quizzes.favorites = [...state.quizzes.favorites, ...action.payload.data];        
        state.quizzes.favoritesQty = action.payload.totalFavorites;
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
        // const newUserQuizzes = state.quizzes.user.filter(
        //   (quiz) => quiz.id !== action.payload.id
        // );
        // state.quizzes.user = [...newUserQuizzes, action.payload];
      })      
      .addCase(updateFavoriteQuizThunk.fulfilled, (state, action) => {        
        notifyBtnHeartSuccess()
        state.quizzes.favorites = state.quizzes.favorites.filter(quiz => quiz._id !== action.payload);
        state.quizzes.favoritesQty = state.quizzes.favoritesQty-1;
      })
      .addCase(deleteQuizThunk.fulfilled, (state, action) => {
        const quizNameToDelete = state.quizzes.ownQuizes.find(quiz => quiz._id === action.payload);        
        notifyQuizDeletedSuccess(quizNameToDelete.quizName);
        state.quizzes.ownQuizes = state.quizzes.ownQuizes.filter(quiz => quiz._id !== action.payload);
        state.quizzes.ownQuizesQty = state.quizzes.ownQuizesQty-1;        
      });
  },
});

export const { setFilter, updateFiltered, updateFavorite, updateOwnQuizes } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
