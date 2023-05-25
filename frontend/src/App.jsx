/* eslint-disable no-constant-condition */
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Login from './pages/Login';
import Register from './pages/Register';
import Locales from './pages/Locales';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={''} />
          <Route path='/locales' element={<Locales />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
