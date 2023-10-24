import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { updateSettingsThunk } from '../store/slices/index.js';

import colors from '../util/colors.js';

const ModalTemas = ({ ...props }) => {
  const { business } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const colorSelect = id => {
    const colorSelected = colors.find(color => color.id === id);
    const settings = { ...business[0].settings, color: colorSelected.title };
    console.log()
    dispatch(updateSettingsThunk(business[0].id), settings);
    //location.reload();
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Temas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Selecciona el color que deseas mostrar a todos tus clientes</p>
        <hr />
        <ul className='colors-list'>
          {colors.map((color, index) => (
            <li
              style={{ background: `linear-gradient(to right,${color.color[0]} 0%, ${color.color[1]} 20%,${color.color[2]} 40%,${color.color[3]} 60%,${color.color[4]} 80%,${color.color[5]} 100%)` }}
              key={color.id}
              onClick={() => colorSelect(color.id)}
            >
              {color.colorBase}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default ModalTemas;
