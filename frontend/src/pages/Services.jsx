import React from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {
  const { name } = useParams();
  const categories = useSelector(state => state.servicesCategories)

  return (
    <div>
      <h3>Servicios</h3>
      {
        name === 'main' ? (
          <div>
            <ul>
              {
                categories.map(category => (
                  <li key={category.id}>
                    <span>{category.name}</span>
                    <span>{category.price}</span>
                  </li>
                ))
              }
            </ul>
            <button className='body btn-general'>Agregar</button>
          </div>
        ) : (
          <div></div>
          )
      }
    </div>
  );
};

export default Services;
