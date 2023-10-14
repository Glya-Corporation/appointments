import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import pen from '../assets/pen.svg';
import saveIcon from '../assets/save.svg';

import { getAllAppointmentsClientThunk } from '../store/slices/client.slice';
import { getUserThunk } from '../store/slices/user.slice';
import getConfig from '../util/getConfig';
import capitalice from '../functions/capitalizar.js';
import { getFavoritesThunk } from '../store/slices';

import apiUrl from '../util/env.js';

const Profile = () => {
  const [showInputs, setShowInputs] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const { user } = useSelector(state => state);
  const { client } = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataModify = () => {
    if (!showInputs) {
      setShowInputs(true);
    } else {
      if ((!name && !email && !number) || (name.length === 0 && email.length === 0 && number.length === 0)) {
        setShowInputs(false);
        return;
      }
      const newData = {
        name: name.split(' ')[0],
        surname: name.split(' ')[1] || '',
        number: number,
        email: email
      };

      for (let property in newData) {
        if (newData[property] === '') delete newData[property];
      }

      if (user.role) {
        axios
          .put(`${apiUrl}${user.role.id === 1 ? 'user' : 'colaborator'}/${user.id}/update`, newData, getConfig())
          .then(res => {
            console.log(res.data);
            dispatch(getUserThunk(user.id, user.role.id));
            setShowInputs(false);
            setName('');
            setNumber('');
            setEmail('');
          })
          .catch(err => console.error(err));
      } else {
        axios
          .put(`${apiUrl}client/${user.id}/update`, newData, getConfig())
          .then(res => {
            console.log(res.data);
            dispatch(getUserThunk(user.id));
            setShowInputs(false);
            setName('');
            setNumber('');
            setEmail('');
          })
          .catch(err => console.error(err));
      }
    }
  };

  useEffect(() => {
    if (user?.id) {
      dispatch(getAllAppointmentsClientThunk(user.id));
      dispatch(getFavoritesThunk(user.id));
    }
  }, [user]);

  return (
    <main className='container-profile'>
      <div className='img-profile'>
        <img src='https://th.bing.com/th/id/R.dc8b1732c919ca17845aab44dc3afb27?rik=qOkrlNPk9Y4cBg&pid=ImgRaw&r=0' alt='' />
        {/* <button>
          <img src={pen} alt='' />
        </button> */}
      </div>
      <div className='info-profile body'>
        {!showInputs ? (
          <div>
            <p>
              {user?.name} {user?.surname}
            </p>
            <p>{user?.number}</p>
            <p>{user?.email}</p>
          </div>
        ) : (
          <form>
            <input type='text' placeholder={`${user.name} ${user.surname}`} value={name} onChange={e => setName(e.target.value)} />
            <input type='text' placeholder={user.number} value={number} onChange={e => setNumber(e.target.value)} />
            <input type='text' placeholder={user.email} value={email} onChange={e => setEmail(e.target.value)} />
          </form>
        )}

        <button>
          <img src={showInputs ? saveIcon : pen} alt='Pencil' onClick={dataModify} />
        </button>
      </div>
      {!user?.role && (
        <>
          <h3>Historial de reservas</h3>
          <ul className='list-history'>
            <li className='list-header'>
              <span>Date</span>
              <span>Time</span>
              <span>Status</span>
              <span>Total</span>
            </li>
            {client.map(item => (
              <li key={item.id} className='body'>
                <span>{item.dateTime.date}</span>
                <span>{item.dateTime.time}</span>
                <span>{capitalice(item.status)}</span>
                <span>$ {item.totalPrice.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <button onClick={() => navigate(user.role?.id === 1 ? '/my/business' : '/locales')} className='business-more body'>
        {user?.role?.id === 1 ? 'Mis Comercios' : 'Más Comercios'}
      </button>
    </main>
  );
};

export default Profile;
