import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAppointmentThunk, getAllAppointmentsThunk } from '../store/slices/appointments.slice';
import { getServicesThunk } from '../store/slices/services.slice';

import sortByTime from '../functions/organizations.js';
import setCategory from '../functions/setCategory';

const HomeBusiness = () => {
  const { user } = useSelector(state => state);
  const { appointments } = useSelector(state => state);
  const { services } = useSelector(state => state);

  const [appointmentsP, setAppointmentsP] = useState([]);
  const [appointmentsToday, setAppointmentsToday] = useState([]);

  const dispatch = useDispatch();

  const fecha = new Date();

  const today = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;

  useEffect(() => {
    dispatch(getAllAppointmentsThunk(user.business?.[0].id));
    dispatch(getServicesThunk(user.business?.[0].id));
  }, [user]);

  useEffect(() => {
    setAppointmentsP(setCategory(services, appointments.filter(appointment => appointment.status === 'pending').sort(sortByTime)));
    setAppointmentsToday(setCategory(services, appointments.filter(appointment => appointment.dateTime.date === today && appointment.status === 'approved').sort(sortByTime)));
  }, [appointments]);


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

  return (
    <main className='container-main'>
      <h3>Reservas del día</h3>
      <ul className='list-reservations'>
        {appointmentsToday.map(appointment => (
          <li key={appointment.id} className='item-reservation-today body'>
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment.dateTime.time.slice(0, 5)}</span>
            <span>{appointment?.service}</span>
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
