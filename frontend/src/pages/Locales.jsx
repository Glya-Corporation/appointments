/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate, useResolvedPath } from 'react-router-dom';

import logoAlfa from '../assets/alfa.svg';
import imgStar from '../assets/star.svg';
import capitalice from '../functions/capitalizar';

import { getBusinessCategoriesThunk, getFavoritesThunk, updateFavorite } from '../store/slices';

import rating from '../functions/rating.js';
import { setLoader } from '../store/slices/loader.slice';

const Locales = () => {
  const allBusiness = useSelector(state => state.business);
  const businessFavorite = useSelector(state => state.favorites);
  const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
  const dispatch = useDispatch();
  const { pathname } = useResolvedPath();

  const navigate = useNavigate();

  const [business, setBusiness] = useState([]);
  const [categorySelected, setCategorySelected] = useState(0);
  const [isFavorites, setIsFavorites] = useState(false);
  const [selectedBusinessId, setSelectedBusinessId] = useState(null);

  const categories = useSelector(state => state.businessCategories);

  const fetchFavorites = () => {
    if (businessFavorite.length < 1) {
      dispatch(getFavoritesThunk(user.id));
    }
    setBusiness(rating(businessFavorite));
    setSelectedBusinessId(null); // Desmarcar cualquier negocio seleccionado anteriormente
  };

  useEffect(() => {
    dispatch(getBusinessCategoriesThunk());
    if (pathname.includes('favorites')) {
      setIsFavorites(true);
      setBusiness(businessFavorite);
      fetchFavorites();
      selectionFavorites();
    } else {
      setBusiness(allBusiness);
    }
  }, [allBusiness, businessFavorite]);

  const getStar = rating => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={imgStar} key={i} width='100px' />);
    }
    return stars;
  };

  const filterBusiness = id => {
    setCategorySelected(id);
    if (id === 0) {
      setBusiness(isFavorites ? rating(businessFavorite) : allBusiness);
    } else {
      let businessNew = null;
      if (isFavorites) {
        businessNew = businessFavorite.filter(item => item.category.find(itemC => itemC.id === id));
      } else {
        businessNew = allBusiness.filter(item => item.category.find(itemC => itemC.id === id));
      }
      setBusiness(businessNew);
    }
  };

  const searchBusiness = text => {
    let businessNew = null;
    if (isFavorites) {
      businessNew = text === '' ? rating(businessFavorite) : business.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    } else {
      businessNew = text === '' ? allBusiness : business.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    }

    setBusiness(businessNew);
  };

  const selectionFavorites = () => {
    const favorite = businessFavorite.find(item => item.business_clients.isSelected);
    setSelectedBusinessId(favorite?.id);
  };

  const saveFavorite = () => {
    const businessSelected = businessFavorite.find(element => element.id === selectedBusinessId);
    dispatch(updateFavorite(businessSelected.business_clients.id, user.id));
  };

  const navigateRute = rute => {
    dispatch(setLoader(true));
    navigate(rute);
    setTimeout(() => {
      dispatch(setLoader(false));
    }, 2000);
  };

  return (
    <main className='body all-business'>
      <img src={logoAlfa} alt='logo-alfa' />
      <p>{isFavorites ? 'Estos son tus establecimientos favoritos, puedes seleccionar uno predeterminado' : 'Reserva tu próxima cita en estos establecimientos'}</p>
      <input type='text' placeholder='Buscar' onChange={e => searchBusiness(e.target.value)} />
      <ul className='all-business--categories'>
        {categories.map(category => (
          <li key={category.id} onClick={() => filterBusiness(category.id)} className={categorySelected === category.id ? 'btn-active' : ''}>
            {capitalice(category?.name)}
          </li>
        ))}
        <li onClick={() => filterBusiness(0)} className={categorySelected === 0 ? 'btn-active' : ''}>
          Todas
        </li>
      </ul>
      <ul className='all-business--business'>
        {business.map(item => (
          <motion.li key={item.id} className='all-business--item' initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <div className='all-business--item-img'>
              <img src={item.logo} alt='logo' onClick={() => navigateRute(`/home/${item.name}/${item.id}`)} />
            </div>
            <div className='all-business--description'>
              <span>{item.name}</span>
              <div className='rating'>{getStar(item.rating)}</div>
            </div>
            {isFavorites && <input className='all-business--check' type='checkbox' checked={selectedBusinessId === item.id} onChange={() => setSelectedBusinessId(item.id)} />}
          </motion.li>
        ))}
      </ul>
      {isFavorites && <button onClick={() => saveFavorite()}>Guardar</button>}
    </main>
  );
};

export default Locales;
