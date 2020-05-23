/* eslint-disable import/prefer-default-export */
import axios from './axiosConfig';

export const signUp = (username: string, name: string, email: string, password: string): any => {
  return axios
    .post('/users', {
      username,
      name,
      email,
      password,
    })
    .then(response => response.data);
};
