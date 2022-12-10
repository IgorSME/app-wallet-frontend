const getStatistics = state => state.statistics.statistics;

const getIsLoading = state => state.statistics.loading;

const getError = state => state.statistics.error;

const statisticsSelectors = {
  getStatistics,
  getError,
  getIsLoading,
};

export default statisticsSelectors;
