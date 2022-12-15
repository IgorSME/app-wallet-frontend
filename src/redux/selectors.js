export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getAccessToken = state => state.auth.accessToken;
export const getAuthLoading = state => state.auth.loading;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getAuthError = state => state.auth.error;
export const getTotalTransactions = state => state.auth.user.userTransactions;

export const getTransactions = state => state.transactions.transactions;
export const getTransactionsLoading = state => state.transactions.loading;
export const getTransactionsError = state => state.transactions.error;
export const getPage = state => state.transactions.page;
export const getTotalPages = state => state.transactions.totalPages;
export const getBalance = state => state.transactions.userBalance;

export const getCategories = state => state.category.categories;
export const getCategoriesLoading = state => state.category.loading;
export const getCategoriesError = state => state.category.error;
