import axios from 'axios';

axios.defaults.baseURL = 'https://63a8a4f3f4962215b586468f.mockapi.io';

export const getAllUsers = async () => {
  const { data } = await axios('/users');
  return data;
};

export const updateUserFollowers = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};
