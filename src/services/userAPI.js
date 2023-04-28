import axios from 'axios';

axios.defaults.baseURL = 'https://63a8a4f3f4962215b586468f.mockapi.io';

export const getUsersWithPagination = async (page = 1) => {
  const { data } = await axios(`/users?page=${page}&limit=6`);
  return data;
};

export const getTotalUsers = async () => {
  const { data } = await axios('/users');
  return data.length;
};

export const updateUserFollowers = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};
