import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import mail from '../assets/mail.svg';
import key from '../assets/key.svg';
import visibility from '../assets/visibility.svg';
import visibilityOff from '../assets/visibility_off.svg';

import { loginThunk } from '../store/slices/user.slice';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [isVisible, setIsVisible] = useState(false);
  const [isSeleted, setIsSeleted] = useState(true);
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = credentials => {
    dispatch(loginThunk(isSeleted, credentials, navigate, remember));
  };

  return (
    <main className='login body'>
      <div className='logo-container'>
        <img className='logo logo-tres' src={logo3} alt='' />
        <img className='logo logo-dos' src={logo2} alt='' />
        <img className='logo logo-uno' src={logo1} alt='' />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='select-login'>
        <span onClick={() => setIsSeleted(!isSeleted)} style={{ borderBottom: isSeleted ? '1px solid #005d2680' : '' }}>
          Cliente
        </span>
        <span onClick={() => setIsSeleted(!isSeleted)} style={{ borderBottom: !isSeleted ? '1px solid #005d2680' : '' }}>
          Comercio
        </span>
      </motion.div>
      <form className='form-login' onSubmit={handleSubmit(submit)}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='input-container'>
          <img className='icons-input' src={mail} alt='icon' />
          <input {...register('email', { required: true })} type='text' placeholder='Correo' />
          {errors.email && <span style={{ color: '#5f0000', fontSize: '13px', position: 'absolute', bottom: '-1.2rem', left: '1rem' }}>Correo requerido</span>}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='input-container'>
          <img className='icons-input' src={key} alt='icon' />
          <input {...register('password', { required: true })} type={!isVisible ? 'password' : 'text'} placeholder='Password' />
          <span style={{ position: 'absolute', right: '.5rem', opacity: '0.5' }}>{isVisible ? <img src={visibilityOff} alt='' onClick={() => setIsVisible(!isVisible)} /> : <img src={visibility} alt='' onClick={() => setIsVisible(!isVisible)} />}</span>
          {errors.password && <span style={{ color: '#5f0000', fontSize: '13px', position: 'absolute', bottom: '-1.2rem', left: '1rem' }}>Contraseña requerida</span>}
        </motion.div>

        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} type='submit'>
          Ingresar
        </motion.button>
        <div className='remember-me'>
          <input type='checkbox' onChange={e => setRemember(e.target.checked)} id='check' defaultChecked='true' />
          <label htmlFor='check'>Recordar</label>
        </div>
      </form>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='login-links'>
        <span onClick={() => navigate(`/register/${isSeleted ? 1 : 2}`)}>Registrarse</span>
        <span>¿Olvido su clave?</span>
      </motion.div>
    </main>
  );
};

export default Login;
