import axios from 'axios';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (email: string, password: string) =>
    api.post('/auth/register', { email, password }),
  
  verifyOTP: (email: string, otp: string) =>
    api.post('/auth/verify-otp', { email, otp }),
  
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  googleLogin: () => `${API_BASE_URL}/api/auth/google`,
  
  getMe: () => api.get('/me'),
};

// Notes API calls
export const notesAPI = {
  getNotes: () => api.get('/notes'),
  createNote: (title: string, content: string) =>
    api.post('/notes', { title, content }),
  deleteNote: (id: string) => api.delete(`/notes/${id}`),
};

export default api;