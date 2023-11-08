import { instance } from "./auth";

export async function getAllReviews(params) {
  const { data } = await instance.get("/feedback", {
    params,
  });
  return data;
}

export async function createReview(review) {
  const { data } = await instance.post("/feedback", review);
  return data;
}

export async function createReviewQuiz({ id, rate }) {
  const { data } = await instance.post(`/feedback/${id}`, { rate });
  return data;
}

export async function createQuizReview(reviewData) {
  const { data } = await instance.post(
    `/feedback/${reviewData.quizId}`,
    reviewData
  );
  return data;
}
