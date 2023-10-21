import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteServiceThunk } from '../store/slices';

import ModalAddServices from '../components/ModalAddServises';
import ModalUpdateServices from '../components/ModalUpdateServices';
import GoBack from '../components/GoBack';

import capitalize from '../functions/capitalizar.js';

import deleteIcon from '../assets/delete.svg';

const Services = () => {
  const categories = useSelector(state => state.servicesCategories);
  const { business } = useSelector(state => state.user);

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!business) navigate('/');
  }, []);

  const openModalUpdate = current => {
    setCurrentService(current);
    setShowUpdate(true);
  };

  const deleteItem = id => {
    const services = categories.filter(category => category.id !== id);
    dispatch(deleteServiceThunk(id, services));
  };

  return (
    <div className='services-main'>
      <GoBack />
      <ModalAddServices show={showAdd} onHide={() => setShowAdd(false)} data={business?.[0].id} />
      <ModalUpdateServices show={showUpdate} onHide={() => setShowUpdate(false)} data={currentService} />
      <h3>Servicios</h3>
      <div>
        <ul className='list-services'>
          <li className='item-services item-services-header'>
            <span>Servicio</span>
            <span>Duración</span>
            <span>Precio</span>
          </li>
          {categories.map(category => (
            <li key={category.id} className='item-services'>
              <span onClick={() => openModalUpdate(category)}>{capitalize(category.name)}</span>
              <span onClick={() => openModalUpdate(category)}>{category.duration.slice(0, 5)}</span>
              <span onClick={() => openModalUpdate(category)}>${category.price.toFixed(2)}</span>
              <img src={deleteIcon} alt='icono' onClick={() => deleteItem(category.id)} />
            </li>
          ))}
        </ul>
        <button className='body btn-general' onClick={() => setShowAdd(true)}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Services;
