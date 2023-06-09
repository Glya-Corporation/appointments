/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
import mail from '../assets/mail.svg';
import key from '../assets/key.svg';
import user from '../assets/user.svg';
import phone from '../assets/phone.svg';
import ruc from '../assets/ruc.svg';
import home from '../assets/home.svg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../store/slices/user.slice';
import { useState } from 'react';

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
        dispatch(loginThunk(id === '1', { email, password }, navigate));
        id === '2' && navigate('/complete/register/business');
      })
      .catch(err => console.error(err));
  };

  return (
    <main className='body register'>
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
        <motion.div initial={{ translateX: 1000 }} animate={{ translateX: 0 }} className='input-container' style={{ width: '12rem' }}>
          <img className='icons-input' src={key} alt='icon' />
          <span style={{ position: 'absolute', right: '.5rem', bottom: '0rem' }}>
            {isVisible ? (
              <svg onClick={() => setIsVisible(!isVisible)} height='25' viewBox='0 96 960 960' width='25' fill='#00000050'>
                <path d='m629 637-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650 556q0 22-5.5 43.5T629 637Zm129 129-40-40q49-36 85.5-80.5T857 556q-50-111-150-175.5T490 316q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485 256q143 0 261.5 81.5T920 556q-26 64-67 117t-95 93Zm58 226L648 827q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40 556q20-52 55.5-101.5T182 360L56 234l42-43 757 757-39 44ZM223 402q-37 27-71.5 71T102 556q51 111 153.5 175.5T488 796q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z' />
              </svg>
            ) : (
              <svg onClick={() => setIsVisible(!isVisible)} height='25' viewBox='0 96 960 960' width='25' fill='#00000050'>
                <path d='M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z' />
              </svg>
            )}
          </span>
          <input {...register('password')} type={!isVisible ? 'password' : 'text'} placeholder='Contraseña' />
        </motion.div>
        <button>Registrar</button>
      </form>
    </main>
  );
};

export default Register;
