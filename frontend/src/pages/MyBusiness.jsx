import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logoAlfa from '../assets/alfa.svg';
import imgStar from '../assets/star.svg';

import { getBusinessCategoriesThunk, updateBusinessThunk } from '../store/slices';

import { setLoader } from '../store/slices/loader.slice';

const MyBusiness = () => {
  const allBusiness = useSelector(state => state.business);
  const user = useSelector(state => state.user);

  const [business, setBusiness] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedBusinessId, setSelectedBusinessId] = useState(null);

  useEffect(() => {
    dispatch(getBusinessCategoriesThunk());
    setBusiness(allBusiness.filter(business => business.owner.id === user.id));
  }, [allBusiness, user]);

  useEffect(() => {
    selectionFavorites();
  }, [business]);

  const getStar = rating => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={imgStar} key={i} width='100px' />);
    }
    return stars;
  };

  const searchBusiness = text => {
    let businessNew = null;
    businessNew = text === '' ? allBusiness.filter(business => business.owner.id === user.id) : business.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));

    setBusiness(businessNew);
  };

  const selectionFavorites = () => {
    const favorite = business.find(item => item.isSelected);
    setSelectedBusinessId(favorite?.id);
  };

  const saveFavorite = () => {
    const businessSelected = business.find(element => element.id === selectedBusinessId);
    dispatch(updateBusinessThunk(businessSelected.id, { isSelected: true }, user.id, user.role.id));
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
      <p>Estos son tus establecimientos, puedes seleccionar uno paraque se muestre como predeterminado</p>
      <input type='text' placeholder='Buscar' onChange={e => searchBusiness(e.target.value)} />
      {/* <ul className='all-business--categories'>
        {categories.map(category => (
          <li key={category.id} onClick={() => filterBusiness(category.id)} className={categorySelected === category.id ? 'btn-active' : ''}>
            {capitalice(category?.name)}
          </li>
        ))}
        <li onClick={() => filterBusiness(0)} className={categorySelected === 0 ? 'btn-active' : ''}>
          Todas
        </li>
      </ul> */}
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
            <input className='all-business--check' type='checkbox' checked={selectedBusinessId === item.id} onChange={() => setSelectedBusinessId(item.id)} />
          </motion.li>
        ))}
      </ul>
      <button onClick={() => saveFavorite()} className='btn btn-update'>
        Guardar
      </button>
    </main>
  );
};

export default MyBusiness;
