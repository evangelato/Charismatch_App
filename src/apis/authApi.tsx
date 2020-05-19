import axios from './axiosConfig';

export const login = (): any => {
  return axios.post('/auth').then(response => response.data);
};

export const logout = (): any => {
  return axios.post('/auth').then(response => response.data);
};
