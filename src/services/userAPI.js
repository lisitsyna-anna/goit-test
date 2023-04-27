import axios from 'axios';

axios.defaults.baseURL = 'https://63a8a4f3f4962215b586468f.mockapi.io';

export const getUsers = async (page = 1) => {
  const { data } = await axios(`/users?page=${page}&limit=3`);
  return data;
};
