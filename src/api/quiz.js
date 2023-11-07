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
  if(categoryNames.length){
    const { data } = await instance.get(`/quizzes?${params}`);
    console.log('data1: ', data);
    return data;
  }else if(ratingStars){
    const { data } = await instance.get(`/quizzes?rate=${ratingStars}`);
    console.log('data2: ', data);
    return data;
  }

  // if(ratingStars&&categoryNames.length){
  //   const { data } = await instance.get(`/quizzes?${params}&&rate=${ratingStars}`);
  //   console.log('data1: ', data);
  //   return data;
  // }else if(ratingStars&&!categoryNames.length){
  //   const { data } = await instance.get(`/quizzes?rate=${ratingStars}`);
  //   console.log('data2: ', data);
  //   return data;
  // }else if(!ratingStars && categoryNames.length){
  //   const { data } = await instance.get(`/quizzes?${params}`);
  //   console.log('data3: ', data);
  //   return data;
  // }
  
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
  const { data } = await instance.patch(`/quizzes/${quizId}`, result);
  return data;
}

export async function patchPassedQuiz({result}) {
  const { data } = await instance.patch(`users/passed-quiz`, result);
  return data;
}

export async function retakePassedQuiz({result}) {
  const { data } = await instance.patch(`users/retake-passed-quiz`, result);
  return data;
}

export async function updateQuiz(quizId) {
  const { data } = await instance.patch(`/quizzes/${quizId}`);
  return data;
}

export async function updateFavoriteQuiz(quizId) {     
  const { data } = await instance.patch(`/users/favorites`, quizId);
  return data;
}

export async function deleteQuiz(quizId) {
  const { data } = await instance.delete(`/quizzes/${quizId}`);
  return data;
}
