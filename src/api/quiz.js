import { instance } from "./auth";

export async function getAllQuizzes(params) {
  const { data } = await instance.get("/quiz/random", { params });
  return data;
}

export async function getFilteredQuizzes(params) {
  const { data } = await instance.get("/quiz", { params });
  return data;
}

export async function getQuizCategories(audience) {
  const { data } = await instance.get(`/categories/${audience}`);
  return data;
}

export async function getPassedQuizzes(params) {
  const { data } = await instance.get("/quiz/passed", { params });
  return data;
}

export async function getUserQuizzes() {
  const { data } = await instance.get("/quiz/user");
  return data;
}

export async function getTotalPassed() {
  const { data } = await instance.get("quiz/total");
  return data;
}

export async function getQuiz(id) {
  const { data } = await instance.get(`/quiz/${id}`);
  return data;
}

export async function getFavoriteQuizzes() {
  const { data } = await instance.get(`/quiz/favorite`);
  return data;
}

export async function createQuiz(quiz) {
  const { data } = await instance.post("/quiz", quiz);
  return data;
}

export async function quizResult({ quizId, result }) {
  const { data } = await instance.post(`/quiz/${quizId}`, result);
  return data;
}

export async function updateQuiz(quiz) {
  const { data } = await instance.patch(`/quiz/${quiz.id}`, quiz);
  return data;
}

export async function updateFavoriteQuiz(quizId) {
  const { data } = await instance.patch(`/quiz/favorite/${quizId}`);
  return data;
}

export async function deleteQuiz(quizId) {
  const { data } = await instance.delete(`/quiz/${quizId}`);
  return data;
}
