/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { setScheduleThunk } from '../store/slices/schedule.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
          X
        </button>
        <section className='modal-container--img'>
          <img src={service?.photo} alt='foto del servicio' />
        </section>
        <section className='modal-container--text'>
          <p> {service?.service.name} </p>
          <p>$ {service?.price.toFixed(2)}</p>
          <p>
            {service?.ownerService.name} {service?.ownerService.surname}
          </p>
          <p>
            {service?.service.duration.split(':')[0]} horas y {service?.service.duration.split(':')[1]} minutos
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
