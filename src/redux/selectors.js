export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getAuthLoading = state => state.auth.loading;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthError = state => state.auth.error;
export const getTransactions = state => state.transactions.transactions;
export const getTransactionsLoading = state => state.transactions.loading;
export const getTransactionsError = state => state.transactions.error;
