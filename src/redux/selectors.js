export const selectReviews = state => state.feedback.reviews;

export const selectTotal = state => state.quiz.quizzes.total;
export const selectRandomAdult = state => state.quiz.quizzes.random.adult;
export const selectRandomChildren = state => state.quiz.quizzes.random.children;

export const selectDiscoverAdult = state => state.quiz.categoryType.adult
export const selectDiscoverChildren = state => state.quiz.categoryType.children
export const selectFavorite = state => state.quiz.quizzes.favorites
export const selectOwnQuizes = state => state.quiz.quizzes.ownQuizes
export const selectPassed = state => state.quiz.quizzes.passed

export const selectReview = state => state.feedback.reviews;


