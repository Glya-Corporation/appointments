import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import capitalice from '../functions/capitalizar';
import getConfig from '../util/getConfig';

import { getBusinessCategoriesThunk } from '../store/slices/businessCategories.slice';

import alfa from '../assets/alfa.png';

import apiUrl from '../util/apiUrl.js';

const CompleteRegisterBusiness = () => {
  const [list, setList] = useState([]);
  const { businessCategories } = useSelector(state => state);
  const { user } = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBusinessCategoriesThunk());
  }, [dispatch]);

  const categoriesSelected = (id, checked) => {
    setList(prevList => {
      if (checked) {
        return [...prevList, id];
      } else {
        return prevList.filter(element => element !== id);
      }
    });
  };

  const save = () => {
    axios
      .post(`${apiUrl}/add/business/category`, { businessId: user.business[0].id, list }, getConfig())
      .then(res => {
        navigate('/home/business');
      })
      .catch(err => console.error(err));
  };

  return (
    <main className='body complete-register'>
      <img src={alfa} alt='logo' />
      <p>
        Usuario Creado Satisfactoriamente <br />
        Escoja las Categorias de su comercio
      </p>
      <ul className='complete-register--list'>
        {businessCategories.map(category => (
          <li key={category.id} className='complete-register--list--item'>
            {capitalice(category?.name)}
            <input type='checkbox' checked={list.includes(category.id)} onChange={e => categoriesSelected(category.id, e.target.checked)} />
          </li>
        ))}
      </ul>
      <button onClick={() => save()}>Guardar</button>
    </main>
  );
};

export default CompleteRegisterBusiness;
