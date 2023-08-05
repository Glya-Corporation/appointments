import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAppointmentsClientThunk } from '../store/slices/client.slice';
import capitalice from '../functions/capitalizar.js';

import pen from '../assets/pen.svg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector(state => state);
  const { client } = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAppointmentsClientThunk(user.id));
  }, [user]);
  return (
    <main className='container-profile'>
      <div className='img-profile'>
        <img src='https://th.bing.com/th/id/R.dc8b1732c919ca17845aab44dc3afb27?rik=qOkrlNPk9Y4cBg&pid=ImgRaw&r=0' alt='' />
        <button>
          <img src={pen} alt='' />
        </button>
      </div>
      <div className='info-profile body'>
        <p>
          {user.name} {user.surname}
        </p>
        <p>{user.number}</p>
        <p>{user.email}</p>
        <button>
          <img src={pen} alt='Pencil' />
        </button>
      </div>
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

      <button onClick={() => navigate('/locales')} className='business-more body'>Más Comercios</button>
    </main>
  );
};

export default Profile;
