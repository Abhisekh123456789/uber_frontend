import axios from 'axios';
import { apiurl } from './apiurl';

export const CallApi = async (config) => {
    try {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            "authorization":`Bearer${token}`,
            ...config.headers
        };

       const response = await axios({
            url:  apiurl+config.url,
            method: config.method || 'GET',
            headers: headers,
            data: config.data
        });
        if(response.data.code === 500){
            localStorage.removeItem('token')
            window.location.href = '/user-login'
        }
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        return { error: true, message: error.message, data: null };
    }
};