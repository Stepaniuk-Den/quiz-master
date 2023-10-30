import { instance } from './auth';

export async function getAllReviews({page = 1, limit}) {
    const { data } = await instance.get('/feedback', {
        params: {
          limit,
          page,
        },
      });
    return data;
}

export async function createReview(review) {
    const { data } = await instance.post('/feedback', review);
    return data;
}




