/* eslint-disable no-unused-vars */
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../store/slices/user.slice';
import { useState } from 'react';

import apiUrl from '../util/env.js';

import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import mail from '../assets/mail.svg';
import key from '../assets/key.svg';
import user from '../assets/user.svg';
import phone from '../assets/phone.svg';
import ruc from '../assets/ruc.svg';
import home from '../assets/home.svg';
import arrowBackAlt from '../assets/arrow_back_alt.svg';
import visibility from '../assets/visibility.svg';
import visibilityOff from '../assets/visibility_off.svg';

const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = ({ user, email, password, confir, number, name, ruc }) => {
    const body = {
      user: {
        name: user.split(' ')[0],
        surname: user.split(' ')[1],
        email,
        password,
        number
      },
      business: {
        name,
        ruc,
        logo: 'https://picsum.photos/200'
      }
    };
    axios
      .post(`${apiUrl}/${id === '1' ? 'client' : 'user'}/register`, id === '1' ? body.user : body)
      .then(res => {
        dispatch(loginThunk(id === '1', { email, password }, navigate, true, '/complete/register/business'));
      })
      .catch(err => console.error(err));
  };

  return (
    <main className='body register'>
      <img className='arrowBackAlt' src={arrowBackAlt} alt='arrow back' onClick={() => navigate('/login')} />
      <div className='logo-container'>
        <img className='logo logo-tres' src={logo3} alt='' />
        <img className='logo logo-dos' src={logo2} alt='' />
        <img className='logo logo-uno' src={logo1} alt='' />
      </div>
      <form className='form-register' onSubmit={handleSubmit(userRegister)}>
        <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
          <img className='icons-input' src={user} alt='icon' />
          <input {...register('user')} type='text' placeholder='Nombre y apellido' />
        </motion.div>
        {id === '2' && (
          <>
            <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
              <img className='icons-input' src={home} alt='icon' />
              <input {...register('name')} type='text' placeholder='Nombre del comercio' />
            </motion.div>
            <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
              <img className='icons-input' src={ruc} alt='icon' />
              <input {...register('ruc')} type='number' placeholder='RUC' />
            </motion.div>
          </>
        )}
        <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
          <img className='icons-input' src={mail} alt='icon' />
          <input {...register('email')} type='email' placeholder='Correo' />
        </motion.div>
        <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
          <img className='icons-input' src={phone} alt='icon' />
          <input {...register('number')} type='text' placeholder='Numero de teléfono' />
        </motion.div>
        <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container'>
          <img className='icons-input' src={key} alt='icon' />
          <input {...register('password')} type={!isVisible ? 'password' : 'text'} placeholder='Contraseña' />
          <span style={{ position: 'absolute', right: '.5rem', opacity: '0.5' }}>
            {isVisible ? <img src={visibilityOff} alt='' onClick={() => setIsVisible(!isVisible)} /> : <img src={visibility} alt='' onClick={() => setIsVisible(!isVisible)} />}
          </span>
        </motion.div>
        <button>Registrar</button>
      </form>
    </main>
  );
};

export default Register;
