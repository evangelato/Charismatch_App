import axios from 'axios';
import { baseUrl } from '../config/const';

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
