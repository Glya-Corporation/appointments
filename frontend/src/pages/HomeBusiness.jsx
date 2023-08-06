import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAppointmentThunk, getAllAppointmentsThunk } from '../store/slices/appointments.slice';

import sortByTime from '../functions/organizations.js';

const HomeBusiness = () => {
  const { user } = useSelector(state => state);
  const { appointments } = useSelector(state => state);

  const [appointmentsP, setAppointmentsP] = useState([]);
  const [appointmentsToday, setAppointmentsToday] = useState([]);

  const dispatch = useDispatch();

  const fecha = new Date();

  const today = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`;

  useEffect(() => {
    dispatch(getAllAppointmentsThunk(user.business?.[0].id));
  }, [user]);

  useEffect(() => {
    setAppointmentsP(appointments.filter(appointment => appointment.status === 'pending').sort(sortByTime));
    setAppointmentsToday(appointments.filter(appointment => appointment.dateTime.date === today).sort(sortByTime));
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
    <main className='reservations'>
      <h3>Reservas del día</h3>
      <ul className='list-reservations'>
        {appointmentsToday.map(appointment => (
          <li key={appointment.id} className='item-reservation-today body'>
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment.dateTime.time}</span>
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
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment.dateTime.time}</span>
            <button onClick={() => updateAppointments(appointment.id, { status: 'approved' })} style={{ background: 'var(--primary)' }}>
              Aceptar
            </button>
            <button style={{ background: '#ffa900' }}>Reagendar</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default HomeBusiness;
