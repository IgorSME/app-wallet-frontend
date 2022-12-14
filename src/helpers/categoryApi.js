import axios from 'axios';

export const getCategory = async () => {
  const { data } = await axios.get('/api/categories');
  return data;
};

export const addCategory = async body => {
  const { data } = await axios.post('/api/categories', body);
  return data;
};

export const deleteCategory = async id => {
  const { data } = await axios.delete(`/api/categories/${id}`);
  return data;
};
