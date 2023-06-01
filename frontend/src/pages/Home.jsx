/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServicesCategoriesThunk } from '../store/slices/servicesCategories.slice';
import capitalice from '../functions/capitalizar';

const Home = () => {
  const { name, id } = useParams();
  const { business } = useSelector(state => state);
  const { servicesCategories } = useSelector(state => state);

  const [selectedBusiness, setSelectedBusiness] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedBusiness(business.find(item => item.id === Number(id)));
  }, [business, name]);

  useEffect(() => {
    selectedBusiness?.id && dispatch(getServicesCategoriesThunk(selectedBusiness.id));
  }, [selectedBusiness]);

  return (
    <main>
      <article className='business'>
        <section className='business-info'>
          <div className='business-info--detail'>
            <h3>{selectedBusiness?.name}</h3>
            <p>Abre: {selectedBusiness?.opening_time}</p>
            <p>Cierra: {selectedBusiness?.closing_time}</p>
            <div>
              <h3>Contáctos</h3>
              <p onClick={() => window.open('https://www.google.com')}>Tlf: {selectedBusiness?.owner?.number}</p>
              <p>{selectedBusiness?.owner?.email}</p>
            </div>
          </div>
          <img className='logo-business' src={selectedBusiness?.logo} alt='' />
        </section>

        <section className='business-categories--goups'>
          <h3 style={{ margin: 'auto' }}>Catálogo de Servicios</h3>
          {servicesCategories.map(category => (
            <>
              <h3>{capitalice(category?.name)}</h3>
              <ul className='group' key={category.id}>
                {category.services.map(service => (
                  <li className='group-li' key={service.id}>
                    <p>$ {service?.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Home;
