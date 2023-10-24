import { useSelector } from 'react-redux';

import GoBack from '../components/GoBack';
import GetStar from '../functions/GetStar';

import ModalTemas from '../components/ModalTemas';
import { useState } from 'react';

const Settings = () => {
  const { business } = useSelector(state => state.user);

  const [showModal, setModalShow] = useState(true);

  return (
    <div className='settings-main'>
      <h3>Configuraciones</h3>
      <ul>
        <li>Temas</li>
        <li>Días laborables</li>
        <li>Colores</li>
        <li>Pagos</li>
      </ul>
    </div>
    <main className='main'>
      <ModalTemas show={showModal} onHide={() => setModalShow(false)} />
      <GoBack />
      <div className='business-card'>
        <img src={business[0].logo} alt='Logo' />
        <p>{business[0].name}</p>
        <p>{business[0].ruc}</p>
        <p>{business[0].openingTime}</p>
        <p>{business[0].closingTime}</p>
        <p className='rating'>{GetStar(business[0].rating)}</p>
        <p>{business[0].address}</p>
      </div>
      <h3>Configuracion</h3>
      <ul className='list-btn-sttings'>
        <li className='btn-general body'>Temas</li>
        <li className='btn-general body'>Días Laborables</li>
        <li className='btn-general body'>Informes</li>
        <li className='btn-general body'>Crear Negocio</li>
      </ul>
    </main>
  );
};

export default Settings;
