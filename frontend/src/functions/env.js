const urlEnv = import.meta.env.VITE_API_URL;

const apiUrl = () => urlEnv || 'https://appointment-w4qf.onrender.com/api/v1';

export default apiUrl;
