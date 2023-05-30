import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getServicesCategoriesThunk } from '../store/slices/servicesCategories.slice';

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
      <article>
        <section>
          <p>{selectedBusiness?.name}</p>
          <p>Abre: {selectedBusiness?.opening_time}</p>
          <p>Cierra: {selectedBusiness?.closing_time}</p>
          <div>
            <h3>Contáctos</h3>
            <p>{selectedBusiness?.owner?.number}</p>
            <p>{selectedBusiness?.owner?.email}</p>
          </div>
        </section>
        <section>
          <img src={selectedBusiness?.logo} alt='' />
        </section>
        <section>
          <ul>
            {servicesCategories.map(category => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Home;
