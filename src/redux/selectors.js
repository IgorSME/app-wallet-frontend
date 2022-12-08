export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getLoading = state => state.auth.loading;
export const getIsLoggedIn = state => state.auth.getIsLoggedIn;
export const getError = state => state.auth.error;
