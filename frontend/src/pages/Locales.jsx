/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoAlfa from '../assets/alfa.svg';
import imgStar from '../assets/star.svg';
import sortRating from '../functions/rating';
import { getAllBusinessThunk } from '../store/slices/business.slice';

const Locales = () => {
  const allBusiness = useSelector(state => state.business);
  const dispatch = useDispatch();

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    if (allBusiness.length < 1) dispatch(getAllBusinessThunk());
    setBusiness(sortRating(allBusiness));
  }, [allBusiness]);

  const getStar = rating => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={imgStar} key={i} width='100px' />);
    }
    return stars;
  };

  return (
    <main className='body all-business'>
      <img src={logoAlfa} alt='logo-alfa' />
      <p>Reserva tu próxima cita en estos establecimientos</p>
      <input type='text' placeholder='Buscar' />
      <ul className='all-business--categories'>
        <li>Spa</li>
        <li>Estéticas</li>
        <li>Barberías</li>
        <li>Otros...</li>
      </ul>
      <ul className='all-business--business'>
        {business.map(item => (
          <li key={item.id} className='all-business--item'>
            <div className='all-business--item-img'>
              <img src={item.logo} alt='logo' />
            </div>
            <div className='all-business--description'>
              <span>{item.name}</span>
              <div className='rating'>{getStar(item.rating)}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Locales;
