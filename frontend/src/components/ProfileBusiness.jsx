import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileBusiness = () => {
  const navigate = useNavigate();

  const goToRute = rute => {
    setTimeout(() => {
      navigate(rute)
    },500)
  }
  return (
    <div className='settings-container'>
      <h3>Configuraciones</h3>
      <div>
        <button className='body btn-general' onClick={() => goToRute('/service/main')}>
          Servicio principal
        </button>
        <button className='body btn-general' onClick={() => goToRute('/service/secondary')}>
          Servicio adicional
        </button>
        <button className='body btn-general' onClick={() => goToRute('')}>
          Colaboradores
        </button>
        <button className='body btn-general' onClick={() => goToRute('')}>
          Catálogo de fotos
        </button>
        <button className='body btn-general' onClick={() => goToRute('')}>
          Horarios
        </button>
        <button className='body btn-general' onClick={() => goToRute('')}>
          Personalización
        </button>
      </div>
    </div>
  );
};

export default ProfileBusiness;
