/* eslint-disable no-constant-condition */
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  if (token && token.length > 0) {
    return <Outlet />;
  } else {
    return <Navigate to='/' />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado
export default ProtectedRoutes;
