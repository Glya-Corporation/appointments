/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
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

const Register = () => {
  const { handleSubmit, register, reset } = useForm();
  const { id } = useParams();

  const userRegister = ({ user, email, password, number, name, ruc }) => {
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
        ruc
      }
    };
    axios
      .post(`${apiUrl}/${id === '1' ? 'client' : 'user'}/register`, id === '1' ? body.user : body)
      .then(res => console.log(res.data))
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input style={{ width: '47%' }} {...register('password')} type='password' placeholder='Contraseña' />
            <input style={{ width: '47%' }} {...register('confir')} type='password' placeholder='Confirmar' />
          </div>
        </motion.div>
        <button>Registrar</button>
      </form>
    </main>
  );
};

export default Register;
