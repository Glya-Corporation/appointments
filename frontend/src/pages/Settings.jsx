import { useSelector } from 'react-redux';

import GoBack from '../components/GoBack';
import GetStar from '../functions/GetStar';

import ModalTemas from '../components/ModalTemas';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const { business } = useSelector(state => state.user);

  const [showModal, setModalShow] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!business) navigate('/');
  }, []);

  return (
    <main className='main'>
      <ModalTemas show={showModal === 1 ? true : false} onHide={() => setModalShow(0)} />
      <GoBack />
      <div className='business-card'>
        <img src={business?.[0].logo} alt='Logo' />
        <p className='rating'>{GetStar(business?.[0].rating)}</p>
        <p>{business?.[0].name}</p>
        <p>{business?.[0].ruc}</p>
        <p>{business?.[0].openingTime}</p>
        <p>{business?.[0].closingTime}</p>
        <p>{business?.[0].address}</p>
      </div>
      <h3>Configuracion</h3>
      <ul className='list-btn-sttings'>
        <li className='btn-general body' onClick={() => setModalShow(1)}>
          Temas
        </li>
        <li className='btn-general body'>Días Laborables</li>
        <li className='btn-general body'>Informes</li>
        <li className='btn-general body'>Crear Negocio</li>
      </ul>
    </main>
  );
};

export default Settings;
