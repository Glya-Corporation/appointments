import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getServicesCategoriesThunk, getColaboratorsThunk } from '../store/slices/index';

const ProfileBusiness = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.id) {
      dispatch(getServicesCategoriesThunk(user.business[0].id));
      dispatch(getColaboratorsThunk(user.business[0].id));
    }
  }, [user]);

  const goToRute = rute => {
    setTimeout(() => {
      navigate(rute);
    }, 500);
  };
  return (
    <div className='settings-container'>
      <h3>Configuraciones</h3>
      <div>
        <button className='body btn-general' onClick={() => goToRute('/service')}>
          Servicio principal
        </button>
        <button className='body btn-general' onClick={() => goToRute('/colaborator')}>
          Colaboradores
        </button>
        <button className='body btn-general' onClick={() => goToRute('/photos')}>
          Catálogo de fotos
        </button>
        <button className='body btn-general' onClick={() => goToRute('/schedules')}>
          Horarios
        </button>
        <button className='body btn-general' onClick={() => goToRute('/settings')}>
          Personalización
        </button>
      </div>
    </div>
  );
};

export default ProfileBusiness;
