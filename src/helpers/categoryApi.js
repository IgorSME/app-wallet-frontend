import instance from 'helpers/api';

export const getCategory = async () => {
  const { data } = await instance.get('/api/categories');
  return data;
};

export const addCategory = async body => {
  const { data } = await instance.post('/api/categories', body);
  return data;
};

export const deleteCategory = async id => {
  const { data } = await instance.delete(`/api/categories/${id}`);
  return data;
};
