import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

import { updateSettings } from '../store/slices/index.js'

const ModalTemas = ({ ...props }) => {
  const { business } = useSelector(state => state.user);

  const dispatch = useDispatch()

  const colors = [
    {
      id: 1,
      title: 'Original',
      color: ['#cbe4f1', '#c8c1de', '#f4d1e1', '#f6cfbd', '#f9f5d1', '#f9f5d1'],
      colorBase: 'Multicolor'
    },
    {
      id: 2,
      title: 'Vino Degradado',
      color: ['#BF0C42', '#982D3B', '#ED8389', '#ED8389', '#982D3B', '#BF0C42'],
      colorBase: '#BF0C42'
    },
    {
      id: 3,
      title: 'Verde Degradado',
      color: ['#009357', '#57B035', '#95C670', '#95C670', '#57B035', '#009357'],
      colorBase: '#009357'
    },
    {
      id: 4,
      title: 'Naranja Degradado',
      color: ['#78280F', '#E9A700', '#DDC467', '#DDC467', '#E9A700', '#78280F']
    },
    {
      id: 5,
      title: 'Verde',
      color: ['#198754', '#198754', '#198754', '#198754', '#198754', '#198754']
    },
    {
      id: 6,
      title: 'Vino',
      color: ['#982D3B', '#982D3B', '#982D3B', '#982D3B', '#982D3B', '#982D3B']
    },
    {
      id: 7,
      title: 'Mostaza',
      color: ['#BA7F0F', '#BA7F0F', '#BA7F0F', '#BA7F0F', '#BA7F0F', '#BA7F0F']
    },
    {
      id: 8,
      title: 'Azul',
      color: ['#1080BF', '#1080BF', '#1080BF', '#1080BF', '#1080BF', '#1080BF']
    }
  ];

  const colorSelect = id => {
    const colorSelected = colors.find(color => color.id === id);
    const settings = { ...business[0].settings, color: colorSelect.title }

    dispatch(updateSettings(business[0].id), settings)
  }

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
            <li style={{ background: `linear-gradient(to right,${color.color[0]} 0%, ${color.color[1]} 20%,${color.color[2]} 40%,${color.color[3]} 60%,${color.color[4]} 80%,${color.color[5]} 100%)` }} key={color.id}>
              {color.title}
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default ModalTemas;