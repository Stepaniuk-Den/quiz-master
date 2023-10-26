import { instance } from './auth';

export async function getAllQuizzes({page = 1, limit, audience = "", category = "", tag = "", rating = 5}) {
    const { data } = await instance.get('/quiz', {
        params: {
          category,
          audience,  
          q: tag,
          limit,
          page,
          rating
        },
      });
    return data;
}

export async function getQuizCategories(audience) {
    const { data } = await instance.get(`/categories/${audience}`);
    return data;
}

export async function getPassedQuizzes(userId) {
    const { data } = await instance.get('/quiz/passed', userId);
    return data;
}

export async function getUserQuizzes(userId) {
    const { data } = await instance.get('/quiz/user', userId);
    return data;
}

export async function getTotalPassed() {
    const { data } = await instance.get('/total');
    return data;
}

export async function getQuiz(id) {
    const { data } = await instance.get(`/quiz/${id}`);
    return data;
}

export async function getFavoriteQuizzes(userId) {
    const { data } = await instance.get(`${userId}/quiz/`);
    return data;
}

export async function createQuiz(quiz) {
    const { data } = await instance.post('/quiz', quiz);
    return data;
}

export async function quizResult({quizId, userId = null, result}) {
    const { data } = await instance.post(`/quiz/${quizId}`, {...result, userId});
    return data;
}

export async function updateQuiz(quizId, quiz) {
    const { data } = await instance.patch(
        `/quiz/${quizId}`,
        quiz
    );
    return data;
}

export async function addFavoriteQuiz({userId, quizId}) {
    const { data } = await instance.patch(
        `${userId}/quiz/`,
        quizId
    );
    return data;
}

export async function deleteQuiz({userId, quizId}) {
    await instance.delete(`/quiz/${quizId}`, userId);
    return data;
}















