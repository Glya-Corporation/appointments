/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServicesCategoriesThunk } from '../store/slices/servicesCategories.slice';
import { getAllGaleryThunk } from '../store/slices/galery.slice';
import capitalice from '../functions/capitalizar';
import ScheduleModal from '../components/ScheduleModal';

const Home = () => {
  const { id } = useParams();
  const business = useSelector(state => state.business);
  const servicesCategories = useSelector(state => state.servicesCategories);
  const galery = useSelector(state => state.galery);

  const [selectedBusiness, setSelectedBusiness] = useState({});
  const [modal, setModal] = useState({ isVisible: false, service: null });

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

  const openModal = service => {
    setModal({ isVisible: true, service });
  };

  const closeModal = () => setModal(false);

  return (
    <main>
      {modal.isVisible && <ScheduleModal service={modal.service} closeModal={closeModal} />}
      <article className='business'>
        <section className='business-info'>
          <div className='business-info--detail'>
            <h3>{selectedBusiness?.name}</h3>
            <p>
              <b>Abre:</b> {selectedBusiness?.openingTime}
            </p>
            <p>
              <b>Cierra:</b> {selectedBusiness?.closingTime}
            </p>
            <div>
              <h3>Contáctos</h3>
              <p>
                <b>Dueño (a):</b> {selectedBusiness?.owner?.name} {selectedBusiness?.owner?.surname}
              </p>
              <p onClick={() => window.open(`https://wa.me/+593${selectedBusiness?.owner?.number}`)}>
                <b>Tlf:</b> {selectedBusiness?.owner?.number}
              </p>
              <p>
                <b onClick={() => window.open(`mailto:${selectedBusiness?.owner?.email}`)}>{selectedBusiness?.owner?.email}</b>
              </p>
            </div>
          </div>
          <img className='logo-business' src={selectedBusiness?.logo} alt='' />
        </section>

        <section style={{ display: 'grid', paddingTop: '2rem', paddingBottom: '3.5rem' }}>
          <h3 style={{ margin: 'auto' }}>Catálogo de Servicios</h3>
          {servicesCategories.map(category => (
            <div key={category.id} className='business-categories--goups'>
              <h3>{capitalice(category?.name)}</h3>
              <ul className='group'>
                {getServicesSelected(category.id).length >= 1 &&
                  getServicesSelected(category?.id).map(service => (
                    <li key={service.id} className='group-li'>
                      <img src={service?.photo} alt='foto del servicio' onClick={() => openModal(service)} />
                      <div className='group-li--p'>
                        <p>$ {service?.price.toFixed(2)} </p>
                        <p>{service.ownerService?.name} </p>
                      </div>
                    </li>
                  ))}
              </ul>
              <hr />
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default Home;
