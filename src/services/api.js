import axios from 'axios';

const API_URL = process.env.REACT_APP_PENCILMATIC_BACKEND_URL;

export const register = (email, password) => {
    return axios.post(`${API_URL}/api/user/register`, { email, password });
};

export const login = (email, password) => {
    return axios.post(`${API_URL}/api/user/login`, { email, password });
};
