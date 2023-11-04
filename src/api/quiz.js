import { instance } from "./auth";

export async function getRandomQuizzes(params) {
  const { data } = await instance.get("/quizzes/random", { params });
  return data;
}
///////////////////////////////////////////////////////////////
// export async function getFilteredQuizzes(params) {
//   const { data } = await instance.get("/quizzes", { params });
//   return data;
// }
export async function getFilteredQuizzes(categories) {
  const { ratingStars, categoryNames } = categories;
  const params = new URLSearchParams();
  categoryNames.forEach((categoryName) => {
    params.append("category", categoryName);
  });
  // const { data } = await instance.get(`/quizzes?${params}`, config);
  // const { data } = await instance.get(
  //   `/quizzes?category=History&category=Fauna`,
  //   config
  // );
  const { data } = await instance.get(
    `/quizzes?rate=${ratingStars}`);
  return data;
}

// export async function getQuizCategories(audience) {
//   const { data } = await instance.get(`/categories/${audience}`);
//   return data;
// }
// export async function getQuizCategories(audience) {
//   console.log(audience);
//   const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDNkODlmMGMxZmNhYTUwY2I2NTlhZCIsImlhdCI6MTY5ODk0NTIyMSwiZXhwIjoxNjk4OTg4NDIxfQ.kDwUeNbhNGfoMZ3TBfpswMmVbs_WkJTKWNGOLgmKVY8';
//   const config = {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };
//   const { data } = await instance.get(`/categories?audience=${audience}`, config);
//   return data;
// }
export async function getQuizCategories() {
  const { data } = await instance.get(`/categories`);
  return data;
}
////////////////////////////////////////////////////////////////////////////
export async function getPassedQuizzes(params) {
  const { data } = await instance.get("/quizzes/passedquiz", { params });
  return data;
}
//////////////////////////////////////////////////////////////////////////////////////////////
// export async function getUserQuizzes() {
//   const { data } = await instance.get("/quizzes/user");
//   return data;
// }
export async function getUserQuizzes() {
  const { data } = await instance.get("/quizzes/myQuiz");
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
  const { data } = await instance.get(`/users/favorites`);  
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
  // const { data } = await instance.patch(`/user/favorites/${quizId}`);  
  const { data } = await instance.patch(`/users/favorites`, quizId);
  return data;
}

export async function deleteQuiz(quizId) {
  const { data } = await instance.delete(`/quizzes/${quizId}`);
  return data;
}
