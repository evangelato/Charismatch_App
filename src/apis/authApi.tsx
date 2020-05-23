import axios from './axiosConfig';

export const login = (): any => {
  return axios
    .post('/auth', {
      username: 'test',
      password: 'test',
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export const logout = (): any => {
  return axios.post('/auth').then(response => response.data);
};
