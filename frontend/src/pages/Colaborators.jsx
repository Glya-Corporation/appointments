import { useState } from 'react';
import GoBack from '../components/GoBack';
import { useDispatch, useSelector } from 'react-redux';

import toggleOnIcon from '../assets/toggle_on.svg';
import toggleOffIcon from '../assets/toggle_off.svg';
import penIcon from '../assets/pen.svg';
import scheduleIcon from '../assets/schedule.svg';
import deleteIcon from '../assets/delete.svg';

import { updateColaboratorThunk } from '../store/slices/index';
import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import ModalAddColborators from '../components/ModalAddColborators';

const Colaborators = () => {
  const [show, setShow] = useState(true);
  const colaborators = useSelector(state => state.colaborators);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateColaborator = id => {
    const colaborator = colaborators.find(colaborator => colaborator.id === id);
    const newObject = {
      ...colaborator,
      status: colaborator.status === 'active' ? 'inactive' : 'active'
    };

    const newArray = [...colaborators.filter(e => e.id !== id), newObject].sort((a, b) => a.id - b.id);

    dispatch(updateColaboratorThunk(id, { status: colaborator.status === 'active' ? 'inactive' : 'active' }, newArray));
  };

  const styles = {
    active: {
      backgroundColor: 'var(--primaryT)',
      fontWeight: 'bold'
    },
    inactive: {
      opacity: 0.8
    }
  };

  return (
    <div className='colaborator-main'>
      <ModalAddColborators show={show} onHide={() => setShow(false)} businessId={colaborators?.[0].businessId} />
      <GoBack />
      <h3>Colaboradores</h3>

      <ul className='list-colaborator'>
        {colaborators.map(colaborator => (
          <li className='item-colaborator' key={colaborator.id} style={colaborator.status === 'active' ? styles.active : styles.inactive}>
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
              <img src={colaborator.status === 'active' ? toggleOnIcon : toggleOffIcon} alt='icono' onClick={() => updateColaborator(colaborator.id)} />
              <img src={scheduleIcon} alt='icono' onClick={() => navigate('/schedules')} />
              <img src={penIcon} alt='icono' />
              <img src={deleteIcon} alt='icono' />
            </div>
          </li>
        ))}
      </ul>
      <Button variant='success' onClick={() => setShow(true)}>
        Agregar
      </Button>
    </div>
  );
};

export default Colaborators;
