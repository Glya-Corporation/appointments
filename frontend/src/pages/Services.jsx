import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAddServices from '../components/ModalAddServises';
import ModalUpdateServices from '../components/ModalUpdateServices';

const Services = () => {
  const categories = useSelector(state => state.servicesCategories);
  const { business } = useSelector(state => state.user);

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    if (!business) navigate('/');
  }, []);

  const openModalUpdate = current => {
    setCurrentService(current);
    setShowUpdate(true);
  };

  return (
    <div className='services-main'>
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
            <li key={category.id} className='item-services' onClick={() => openModalUpdate(category)}>
              <span>{category.name}</span>
              <span>{category.duration.slice(0, 5)}</span>
              <span>${category.price.toFixed(2)}</span>
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
