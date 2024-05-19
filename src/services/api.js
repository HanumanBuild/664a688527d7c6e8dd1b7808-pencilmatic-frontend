import axios from 'axios';

const API_URL = process.env.REACT_APP_PENCILMATIC_BACKEND_URL;

export const register = (email, password) => {
    return axios.post(`${API_URL}/api/user/register`, { email, password });
};

export const login = (email, password) => {
    return axios.post(`${API_URL}/api/user/login`, { email, password });
};

export const saveDrawing = (drawingData) => {
    const token = localStorage.getItem('token');
    return axios.post(`${API_URL}/api/drawings/save`, { drawingData }, {
        headers: {
            'auth-token': token
        }
    });
};

export const getDrawings = () => {
    const token = localStorage.getItem('token');
    return axios.get(`${API_URL}/api/drawings/all`, {
        headers: {
            'auth-token': token
        }
    });
};