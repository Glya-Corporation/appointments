import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Register from './pages/Register';
import Locales from './pages/Locales';
import Home from './pages/Home';
import CompleteRegisterBusiness from './components/CompleteRegisterBusiness';
import { useDispatch, useSelector } from 'react-redux';
import { getUserThunk } from './store/slices/user.slice';
import { getAllBusinessThunk } from './store/slices/business.slice';
import { useEffect } from 'react';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import Schedule from './pages/Schedule';
import NotificationBar from './components/NotificationBar';
import HomeBusiness from './pages/HomeBusiness';
import HistorialBusiness from './pages/HistorialBusiness';
import MyBusiness from './pages/MyBusiness';
import Services from './pages/Services';
import Colaborators from './pages/Colaborators';
import Photos from './pages/Photos';
import Schedules from './pages/Schedules';
import Settings from './pages/Settings';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) || {};
  const isLoading = useSelector(state => state.loader);

  useEffect(() => {
    if (user.id) {
      dispatch(getUserThunk(user.id, user.role?.id));
      dispatch(getAllBusinessThunk());
      document.body.classList.add(user.business[0].settings?.color);
    }
  }, [user]);


  return (
    <HashRouter>
      {isLoading && <Loading />}
      <NotificationBar />
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Profile />} />
          <Route path='/locales' element={<Locales />} />
          <Route path='/home/:name/:id' element={<Home />} />
          <Route path='/home/business' element={<HomeBusiness />} />
          <Route path='/locales/favorites' element={<Locales />} />
          <Route path='/my/business' element={<MyBusiness />} />
          <Route path='/complete/register/business' element={<CompleteRegisterBusiness />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/historial/business' element={<HistorialBusiness />} />
          <Route path='/service' element={<Services />} />
          <Route path='/colaborator' element={<Colaborators />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/schedules/:id' element={<Schedules />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
