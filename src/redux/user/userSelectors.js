export const selectUser = state => state.user.user;
export const selectToken = state => state.user.token;
export const selectIsAuth = state => Boolean(state.user.token);
export const selectUserAvatar = state => state.user.avatar;
export const selectIsRefreshing = state => state.user.isRefreshing;