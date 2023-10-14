/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { setScheduleThunk } from '../store/slices/schedule.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import close from '../assets/close.svg';

const ScheduleModal = ({ service, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schedule = () => {
    dispatch(setScheduleThunk(service));
    navigate('/schedule');
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='body-modal'>
      <article className='modal-container body'>
        <button className='modal-close' onClick={() => closeModal()}>
          <img src={close} alt='icono de cerrar' />
        </button>
        <section className='modal-container--img'>
          <img src={service?.photo} alt='foto del servicio' />
        </section>
        <section className='modal-container--text'>
          <p>
            <b>Diseño:</b> {service?.service.name}{' '}
          </p>
          <p>
            <b>Precio:</b> $ {service?.price.toFixed(2)}
          </p>
          <p>
            <b>Colaborador (a):</b> {service?.ownerService.name} {service?.ownerService.surname}
          </p>
          <p>
            <b>Duración:</b> {service?.service.duration.split(':')[0]} horas y {service?.service.duration.split(':')[1]} minutos
          </p>
        </section>
        <button className='modal-avance' onClick={() => schedule()}>
          Agendar
        </button>
      </article>
    </motion.main>
  );
};

export default ScheduleModal;
