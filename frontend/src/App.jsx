/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-constant-condition */
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Register from './pages/Register';
import Locales from './pages/Locales';
import CompleteRegisterBusiness from './components/CompleteRegisterBusiness';
import { useDispatch } from 'react-redux';
import { getUserThunk } from './store/slices/user.slice';
import { getAllBusinessThunk } from './store/slices/business.slice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      dispatch(getUserThunk(user.id, user.role?.id));
      dispatch(getAllBusinessThunk());
    }
  }, [user]);

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/locales' element={<Locales />} />
          <Route path='/locales/favorites' element={<Locales />} />
          <Route path='/complete/register/business' element={<CompleteRegisterBusiness />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
