import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setCategory from '../functions/setCategory';

const HistorialBusiness = () => {
  const allAppointments = useSelector(state => state.appointments);
  const { services } = useSelector(state => state);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setAppointments(setCategory(services, allAppointments));
  }, [allAppointments]);

  return (
    <main className='container-main'>
      <h3>Historial de Reservas</h3>
      <div>
        <input type='text' />
        <button>Buscar</button>
      </div>
      <ul className='filter-history-business'>
        <li className='body'>Aprobadas</li>
        <li className='body'>Pendientes</li>
        <li className='body'>Canceladas</li>
        <li className='body'>Calificadas</li>
        <li className='body'>No Calificada</li>
      </ul>
      <ul className='list-history-business'>
        {appointments.map(appointmen => (
          <li key={appointmen.id} className='item-history-business body'>
            <span>
              {appointmen.client.name} {appointmen.client.surname}
            </span>
            <span>{appointmen.dateTime.date}</span>
            <button style={{gridColumn: '3/3', gridRow: '1/3'}}>Ver</button>
            <span>{appointmen.service}</span>
          </li>
        ))}
      </ul>
      <div className='paginate-container'>
        <button>Prev</button>
        <ul className='paginate-numbers'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <button>Next</button>
      </div>
      <button>Resumen de Ganancias</button>
    </main>
  );
};

export default HistorialBusiness;
