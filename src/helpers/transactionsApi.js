import instance from 'helpers/api';

export const getAllTransactions = async () => {
  const { data } = await instance.get('/api/transactions');
  return data;
};

export const addTransaction = async body => {
  const { data } = await instance.post('/api/transactions', body);
  return data;
};

export const updateTransactionById = async (id, body) => {
  console.log(body, id);
  const { data } = await instance.patch(`/api/transactions/${id}`, body);
  return data;
};
