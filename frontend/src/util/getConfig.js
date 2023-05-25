const getConfig = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}` }
});

export default getConfig;
