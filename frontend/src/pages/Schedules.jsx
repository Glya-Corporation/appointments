import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GoBack from '../components/GoBack';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Schedules = () => {
  const { id } = useParams();
  const [currentColaborator, setCurrentColaborator] = useState({});
  const [colaboratorId, setColaboratorId] = useState(id);

  const colaborators = useSelector(state => state.colaborators);
  const { business } = useSelector(state => state.user);

  const week = business[0].settings.businessDays;

  const selectColaborator = id => {
    const current = colaborators.find(c => c.id === Number(id));

    setCurrentColaborator(current);
    setColaboratorId(id);
  };

  useEffect(() => {
    selectColaborator(id);
  }, [id]);

  return (
    <div className='schedules-main'>
      <GoBack />
      <article>
        <input type='week' className='input-week' />

        <ul className='schedules--list-hours' style={{ gridTemplateColumns: `repeat(${week.length},1fr)` }}>
          {week.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
          {currentColaborator.workingHours?.map((day, index) => (
            <li key={index}>
              <span>{day.entryTime.slice(0, 5)}</span>
              <span>{day.departureTime.slice(0, 5)}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className='schedule-detail'>
        <section className='schedule-detail--hours'>
          <div>
            <h4>Horario</h4>
            <div>
              <label>Entrada</label>
              <input type='time' />
            </div>
            <div>
              <label>Salida</label>
              <input type='time' />
            </div>
          </div>
          <div>
            <h4>Colaborador</h4>
            <select className='schedules--list-colaborators' value={colaboratorId} onChangeCapture={e => selectColaborator(e.target.value)}>
              {colaborators.map(colaborator => (
                <option key={colaborator.id} value={colaborator.id}>
                  {colaborator.name} {colaborator.surname}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className='schedule-detail--days'>
          <h6>Selecciona otros días de las semana para plicar el mismo horario</h6>
          <ul>
            {week.map((day, index) => (
              <li key={index}>
                <label htmlFor={index}>{day}</label>
                <input type='checkbox' id={index} />
              </li>
            ))}
          </ul>
        </section>
        <button className='body btn'>Guardar</button>
      </article>
    </div>
  );
};

export default Schedules;
