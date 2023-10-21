import React from 'react';
import GoBack from '../components/GoBack';
import { useSelector } from 'react-redux';

import toggleOnIcon from '../assets/toggle_on.svg';
import toggleOffIcon from '../assets/toggle_off.svg';
import penIcon from '../assets/pen.svg';
import scheduleIcon from '../assets/schedule.svg';

const Colaborators = () => {
  const colabortors = useSelector(state => state.colaborators);

  return (
    <div className='colaborator-main'>
      <GoBack />
      <h3>Colaboradores</h3>

      <ul className='list-colaborator'>
        {colabortors.map(colaborator => (
          <li className='item-colaborator'>
            <div>
              <img src={colaborator.imgProfile} alt='icono' />
            </div>
            <span>
              {colaborator.name} {colaborator.surname}
            </span>
            <span>{colaborator.number}</span>
            <span>$ {colaborator.salary.toFixed(2)}</span>
            <span>{colaborator.email}</span>
            <div className='icons-colaborator'>
              <img src={toggleOnIcon} alt='icono' />
              <img src={scheduleIcon} alt='icono' />
              <img src={penIcon} alt='icono' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colaborators;
