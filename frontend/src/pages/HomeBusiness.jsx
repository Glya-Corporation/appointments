import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAppointmentThunk, getAllAppointmentsThunk } from '../store/slices/appointments.slice';
import { getServicesThunk } from '../store/slices/services.slice';

import sortByTime from '../functions/organizations.js';
import setCategory from '../functions/setCategory';
import ModalDetail from '../components/ModalDetail';

const HomeBusiness = () => {
  const user = useSelector(state => state.user);
  const appointments = useSelector(state => state.appointments);
  const services = useSelector(state => state.services);

  const [modalShow, setModalShow] = useState(false);
  const [appointmentsP, setAppointmentsP] = useState([]);
  const [appointmentsToday, setAppointmentsToday] = useState([]);
  const [itemSelected, setItemSelected] = useState({});

  const dispatch = useDispatch();

  const fecha = new Date();

  const today = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;

  useEffect(() => {
    if (user?.id >= 1) {
      dispatch(getAllAppointmentsThunk(user.business?.[0].id));
      dispatch(getServicesThunk(user.business?.[0].id));
    }
  }, [user]);

  useEffect(() => {
    setAppointmentsP(setCategory(services, appointments.filter(appointment => appointment.status === 'pending').sort(sortByTime)));
    setAppointmentsToday(setCategory(services, appointments.filter(appointment => appointment.dateTime.date === today && appointment.status === 'approved').sort(sortByTime)));
  }, [appointments, services]);

  const filterReservations = value => {
    const newArry = appointments.filter(appointment => appointment.dateTime.time.includes(value));
    setAppointmentsP(newArry.sort(sortByTime));
  };

  const updateAppointments = (id, status) => {
    dispatch(UpdateAppointmentThunk(id, status));
    setTimeout(() => {
      dispatch(getAllAppointmentsThunk(user.business[0].id));
    }, 500);
  };

  const activateModal = item => {
    setItemSelected(item);
    setModalShow(true);
  };

  return (
    <main className='container-main'>
      <ModalDetail show={modalShow} onHide={() => setModalShow(false)} item={itemSelected} />
      <h3>Reservas del día</h3>
      <ul className='list-reservations'>
        {appointmentsToday.map(appointment => (
          <li key={appointment.id} className='item-reservation-today body'>
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment.dateTime.time.slice(0, 5)}</span>
            <span>{appointment?.service}</span>
            <svg onClick={() => activateModal(appointment)} height='25' viewBox='0 96 960 960' width='25' fill='#00000050'>
              <path d='M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z' />
            </svg>
          </li>
        ))}
      </ul>
      <h3>Reservas pendientes</h3>
      <div className='reservations-filter'>
        <input type='text' placeholder='Hora' onChange={e => filterReservations(e.target.value)} className='body' />
        <button className='body'>Buscar</button>
      </div>
      <ul className='list-reservations'>
        {appointmentsP.map(appointment => (
          <li key={appointment.id} className='item-reservation-pending body'>
            <span>{appointment.dateTime.date}</span>
            <span>{appointment.dateTime.time.slice(0, 5)}</span>
            <button onClick={() => updateAppointments(appointment.id, { status: 'approved' })} style={{ background: 'var(--primary)', gridRow: '1/3', gridColumn: '3/3' }}>
              Aceptar
            </button>
            <button style={{ background: '#ffa900', gridRow: '1/3', gridColumn: '4/4' }}>Reagendar</button>
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment?.service}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomeBusiness;
