import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Schedules = () => {
  const colaborators = useSelector(state => state.colaborators);

  const week = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  const [currentColaborator, setCurrentColaborator] = useState();

  console.log(currentColaborator)

  return (
    <div className='schedules-main'>
      <input type='week' />
      <select className='schedules--list-colaborators' onChangeCapture={e => setCurrentColaborator(e.target.value)}>
        {colaborators.map(colaborator => (
          <option key={colaborator.id} value={colaborator.id}>
            {colaborator.name}
          </option>
        ))}
      </select>
      <div className='schedules--list-hours'>
        <ul className='schedules--list-days'>
          {week.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        {colaborators.map(colaborator => (
          <ul>
            {colaborator.workingHours.map((day, index) => (
              <li key={index}>
                <span>{day.entryTime}</span>
                <span>{day.departureTime}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Schedules;
