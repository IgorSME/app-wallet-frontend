import axios from 'axios';

export const getAllTransactions = async () => {
  const { data } = await axios.get('/api/transactions');
  return data;
};

export const addTransaction = async body => {
  const { data } = await axios.post('/api/transactions', body);
  return data;
};

export const updateTransactionById = async (id, body) => {
  console.log(body, id);
  const { data } = await axios.patch(`/api/transactions/${id}`, body);
  return data;
};
