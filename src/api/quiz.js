import { instance } from "./auth";

export async function getRandomQuizzes(params) {
  const { data } = await instance.get("/quizzes/random", { params });
  return data;
}

export async function getFilteredQuizzes(params) {    
  const { ratingStars, categoryNames, inputValue } = params;    
  const categoryIds = categoryNames?.join("+")
    
  if(inputValue&&categoryNames.length&&(ratingStars || ratingStars===0)){    
    const { data } = await instance.get(`/quizzes?q=${inputValue}&category=${categoryIds}&rate=${ratingStars}`);    
    return data;
  }else if(inputValue&&!categoryNames.length&&(ratingStars || ratingStars===0)){    
    const { data } = await instance.get(`/quizzes?q=${inputValue}&rate=${ratingStars}`);    
    return data;
  }else if(inputValue&&categoryNames.length&&!(ratingStars || ratingStars===0)){    
    const { data } = await instance.get(`/quizzes?q=${inputValue}&category=${categoryIds}`);    
    return data;
  }else if(inputValue){    
    const { data } = await instance.get(`/quizzes?q=${inputValue}`);    
    return data;
  }

  if(categoryNames.length&&(ratingStars || ratingStars===0)){
    const { data } = await instance.get(`/quizzes?category=${categoryIds}&rate=${ratingStars}`);    
    return data;
  }
  else if(categoryNames.length&&!ratingStars){    
    const { data } = await instance.get(`/quizzes?category=${categoryIds}`);    
    return data;
  }else if(!categoryNames.length && (ratingStars || ratingStars===0)){    
    const { data } = await instance.get(`/quizzes?rate=${ratingStars}`);    
    return data;
  }  
}

export async function getQuizCategories() {
  const { data } = await instance.get(`/categories`);
  return data;
}

export async function getPassedQuizzes(params) {
  const { data } = await instance.get("/quizzes/passedquiz", { params });
  return data;
}

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
