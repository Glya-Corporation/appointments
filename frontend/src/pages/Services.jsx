import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ModalAddServices from '../components/ModalAddServises';

const Services = () => {
  const { name } = useParams();
  const categories = useSelector(state => state.servicesCategories);
  const { business } = useSelector(state => state.user);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!business) navigate('/');
  }, []);

  const data = {
    title: name === 'main' ? 'Servicios Principales' : 'Servicios Adicionles',
    business: business?.[0].id
  };

  return (
    <div className='services-main'>
      <ModalAddServices show={show} onHide={() => setShow(false)} data={data} />
      <h3>Servicios</h3>
      {name === 'main' ? (
        <div>
          <ul className='list-services'>
            <li className='item-services item-services-header'>
              <span>Servicio</span>
              <span>Duración</span>
              <span>Precio</span>
            </li>
            {categories.map(category => (
              <li key={category.id} className='item-services'>
                <span>{category.name}</span>
                <span>{category.duration.slice(0, 5)}</span>
                <span>${category.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className='body btn-general' onClick={() => setShow(true)}>
            Agregar
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Services;
