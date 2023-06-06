/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServicesCategoriesThunk } from '../store/slices/servicesCategories.slice';
import { getAllGaleryThunk } from '../store/slices/galery.slice';
import capitalice from '../functions/capitalizar';

const Home = () => {
  const { id } = useParams();
  const business = useSelector(state => state.business);
  const servicesCategories = useSelector(state => state.servicesCategories);
  const galery = useSelector(state => state.galery);

  const [selectedBusiness, setSelectedBusiness] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedBusiness(business.find(item => item.id === Number(id)));
  }, [business, id]);

  useEffect(() => {
    dispatch(getAllGaleryThunk(id));
  }, []);

  useEffect(() => {
    selectedBusiness?.id && dispatch(getServicesCategoriesThunk(selectedBusiness.id));
  }, [selectedBusiness]);

  const getServicesSelected = id => {
    return galery.filter(item => item.service.categoryId === id);
  };

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

        <section style={{ display: 'grid', paddingTop: '2rem' }}>
          <h3 style={{ margin: 'auto' }}>Catálogo de Servicios</h3>
          {servicesCategories.map(category => (
            <div key={category.id} className='business-categories--goups'>
              <h3>{capitalice(category?.name)}</h3>
              <ul className='group'>
                {getServicesSelected(category.id).length >= 1 &&
                  getServicesSelected(category?.id).map(service => (
                    <li key={uuidv4()} className='group-li'>
                      <img src={service?.photo} alt='foto del servicio' />
                      <div className='group-li--p'>
                        <p>$ {service?.price.toFixed(2)} </p>
                        <p>{service.ownerService?.name} </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Home;
