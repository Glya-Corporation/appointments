import { motion } from 'framer-motion';
import { useState } from 'react';
import hexagon from '../assets/hexagon.svg';
import home from '../assets/home.svg';
import plus from '../assets/plus.svg';
import history from '../assets/history.svg';
import user from '../assets/user.svg';
import exit from '../assets/exit.svg';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  }
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-list--item active' onClick={() => navigate('/')}>
            <motion.img src={hexagon} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 1 ? -15 : 0 }} onClick={() => setActive(1)} />
            <motion.img src={home} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 1 ? -15 : 0 }} onClick={() => setActive(1)} />
          </li>
          <li className='nav-list--item'>
            <motion.img src={hexagon} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 2 ? -15 : 0 }} onClick={() => setActive(2)} />
            <motion.img src={plus} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 2 ? -15 : 0 }} onClick={() => setActive(2)} />
          </li>
          <li className='nav-list--item'>
            <motion.img src={hexagon} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 3 ? -15 : 0 }} onClick={() => setActive(3)} />
            <motion.img src={history} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 3 ? -15 : 0 }} onClick={() => setActive(3)} />
          </li>
          <li className='nav-list--item' onClick={() => navigate('/')}>
            <motion.img src={hexagon} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 4 ? -15 : 0 }} onClick={() => setActive(4)} />
            <motion.img src={user} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 4 ? -15 : 0 }} onClick={() => setActive(4)} />
          </li>
          <li className='nav-list--item' onClick={() => logout()}>
            <motion.img src={hexagon} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 5 ? -15 : 0 }} onClick={() => setActive(5)} />
            <motion.img src={exit} alt='icon' initial={{ translateY: 0 }} animate={{ translateY: active === 5 ? -15 : 0 }} onClick={() => setActive(5)} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
