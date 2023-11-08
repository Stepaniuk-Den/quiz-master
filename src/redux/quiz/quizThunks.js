import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getRandomQuizzes,
    getFilteredQuizzes,
    getQuizCategories,
    getPassedQuizzes,
    getUserQuizzes,
    getTotalPassed,
    getQuiz,
    getFavoriteQuizzes,
    createQuiz,
    quizResult,
    updateQuiz,
    updateFavoriteQuiz,
    deleteQuiz,
    patchPassedQuiz,
    retakePassedQuiz,
} from "../../api/quiz";
import { notifyBtnHeartSuccess } from "../../shared/NotificationToastify/Toasts";

export const getRandomQuizzesThunk = createAsyncThunk(
    'quiz/getRandom',
    async (params, thunkAPI) => {
        try {
            const data = await getRandomQuizzes(params);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getFilteredQuizzesThunk = createAsyncThunk(
    'quiz/getFiltered',
    async (params, thunkAPI) => {
        try {
            const data = await getFilteredQuizzes(params);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuizCategoriesThunk = createAsyncThunk(
    'quiz/getCategories',
    async (_, thunkAPI) => {
        try {
            const data = await getQuizCategories();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getPassedQuizzesThunk = createAsyncThunk(
    'quiz/getPassed',
    async (params, thunkAPI) => {
        try {
            const data = await getPassedQuizzes(params);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getUserQuizzesThunk = createAsyncThunk(
    'quiz/getUserQuizzes',
    async (params, thunkAPI) => {
        try {
            const data = await getUserQuizzes(params);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getTotalPassedThunk = createAsyncThunk(
    'quiz/getTotal',
    async (_, thunkAPI) => {
        try {
            const data = await getTotalPassed();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getQuizThunk = createAsyncThunk(
    'quiz/getQuiz',
    async (id, thunkAPI) => {
        try {
            const data = await getQuiz(id);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getFavoriteQuizzesThunk = createAsyncThunk(
    'quiz/getFavorite',
    async (params, thunkAPI) => {        
        const {setTotal, page} = params;
        try {            
            const data = await getFavoriteQuizzes(page);            
            console.log('data: ', data);
            setTotal(data.totalFavorites)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createQuizThunk = createAsyncThunk(
    'quiz/addQuiz',
    async (quiz, thunkAPI) => {
        try {
            const data = await createQuiz(quiz);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const quizResultThunk = createAsyncThunk(
    'quiz/addResult',
    async (quiz, thunkAPI) => {
        try {
            const data = await quizResult(quiz);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const passedUsersQuiz = createAsyncThunk(
    'quiz/passedUsersQuiz',
    async (quiz, thunkAPI) => {
        try {
            const data = await patchPassedQuiz(quiz);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateUsersQuiz = createAsyncThunk(
    'quiz/retakeUsersQuiz',
    async (quiz, thunkAPI) => {
        try {
            const data = await retakePassedQuiz(quiz);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateQuizThunk = createAsyncThunk(
    'quiz/updateQuiz',
    async (quizData, thunkAPI) => {
        try {
            const data = await updateQuiz(quizData);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateFavoriteQuizThunk = createAsyncThunk(
    'quiz/updateFavorite',
    async (id, thunkAPI) => {
        const {quizId, setTotal} = id;
        try {
            const data = await updateFavoriteQuiz(quizId);
            notifyBtnHeartSuccess()            
            // return data;
            //await updateFavoriteQuiz(quizId);
            setTotal(data.totalFavorites)
            return quizId.favorites;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteQuizThunk = createAsyncThunk(
    'quiz/deleteQuiz',
    async (id, thunkAPI) => {
        try {
            const data = await deleteQuiz(id);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);





