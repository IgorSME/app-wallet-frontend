import axios from 'axios';

export const getAllTransactions = async body => {
  let query = '';

  if (body) {
    query = `/api/transactions?page=${body.page}&limit=${body.limit}`;
  } else {
    query = '/api/transactions';
  }

  const { data } = await axios.get(query);
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
