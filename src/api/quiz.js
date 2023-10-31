import { instance } from "./auth";

export async function getRandomQuizzes(params) {
  const { data } = await instance.get("/quizzes/random", { params });
  return data;
}

export async function getFilteredQuizzes(params) {
  const { data } = await instance.get("/quizzes", { params });
  return data;
}

export async function getQuizCategories(params) {
  const { data } = await instance.get(`/categories/`, {params});
  return data;
}

export async function getPassedQuizzes(params) {
  const { data } = await instance.get("/quizzes/passed", { params });
  return data;
}

export async function getUserQuizzes() {
  const { data } = await instance.get("/quizzes/user");
  return data;
}

export async function getTotalPassed() {
  const { data } = await instance.get("quiz/total");
  return data;
}

export async function getQuiz(id) {
  const { data } = await instance.get(`/quizzes/${id}`);
  return data;
}

export async function getFavoriteQuizzes() {
  const { data } = await instance.get(`/quizzes/favorite`);
  return data;
}

export async function createQuiz(quiz) {
  const { data } = await instance.post("/quizzes/", quiz);
  return data;
}

export async function quizResult({ quizId, result }) {
  const { data } = await instance.post(`/quizzes/${quizId}`, result);
  return data;
}

export async function updateQuiz(quiz) {
  const { data } = await instance.patch(`/quizzes/${quiz.id}`, quiz);
  return data;
}

export async function updateFavoriteQuiz(quizId) {
  const { data } = await instance.patch(`/quizzes/favorite/${quizId}`);
  return data;
}

export async function deleteQuiz(quizId) {
  const { data } = await instance.delete(`/quizzes/${quizId}`);
  return data;
}
