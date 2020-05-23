/* eslint-disable import/prefer-default-export */
import axios from './axiosConfig';

export const signUp = (): any => {
  return axios
    .post('/users', {
      name: 'test',
      username: 'test',
      password: 'test',
    })
    .then(response => response.data);
};
