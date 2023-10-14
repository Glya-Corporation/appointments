import React from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {
  const { name } = useParams();
  console.log(name);

  return (
    <div>
      <h3>Servicios</h3>
      {
        name === 'main' ? (
          <div>
            <ul></ul>
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
