import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import capitalice from '../functions/capitalizar';
import { useEffect, useState } from 'react';
import { getAllAppointmentsThunk, createAppointmentThunk } from '../store/slices/appointments.slice';
import arrowBack from '../assets/arrow_back.svg';
import getDuration from '../functions/getDuration.js';
import calDate from '../functions/calDate.js';

const Schedule = () => {
  const [businessSelected, setBusinessSelected] = useState({});
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('Seleccionar...');
  const [showList, setShowList] = useState(false);
  const [totalServices, setTotalServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDuration, setTotalDuration] = useState('');

  const categories = useSelector(state => state.servicesCategories);
  const service = useSelector(state => state.schedule);
  const { business } = useSelector(state => state);
  const { appointments } = useSelector(state => state);
  const { user } = useSelector(state => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setBusinessSelected(business.find(item => item.id === service.businessId));
  }, [business]);

  useEffect(() => {
    businessSelected.id && dispatch(getAllAppointmentsThunk(businessSelected.id));
  }, [businessSelected]);

  useEffect(() => {
    setTotalServices([service.service]);
  }, [service]);

  const getAvailable = workingHours => {
    let openingTime = '08:00:00';
    let closingTime = '20:00:00';

    for (const working in workingHours) {
      if (workingHours[working].date === date) {
        openingTime = workingHours[working].entryTime;
        closingTime = workingHours[working].departureTime;
      }
    }

    const horaApertura = Number(openingTime.split(':')[0]);
    const horaCierre = Number(closingTime.split(':')[0]);
    const minutApertura = Number(openingTime.split(':')[1]);
    const minutCierre = Number(closingTime.split(':')[1]);

    let elements = [];

    for (let i = horaApertura; i <= horaCierre; i++) {
      elements.push(`${i}:00:00`);
      i < horaCierre && elements.push(`${i}:30:00`);
    }

    appointments.forEach(a => {
      if (a.dateTime.date === date) {
        const i = elements.indexOf(a.dateTime.time);
        if (i !== -1) {
          elements.splice(i, a.totalDuration);
        }
      }
    });

    return elements.map((item, index) => (
      <li
        key={index}
        onClick={() => {
          setHours(item);
          setShowList(false);
        }}
      >
        {item}
      </li>
    ));
  };

  const selectAditionals = (category, isSelected) => {
    const array = [...totalServices];
    console.log(array)
    if (isSelected) {
      array.push(category);
      setTotalPrice(totalPrice + category.price);
      setTotalDuration(calDate(totalDuration, category.duration, '+'));
    } else {
      array.splice(array.indexOf(category), 1);
      setTotalPrice(totalPrice - category.price);
      setTotalDuration(calDate(totalDuration, category.duration, '-'));
    }
    setTotalServices(array);
  };

  const create = () => {
    const data = {
      dateTime: {
        date,
        time: hours
      },
      totalPrice,
      totalDuration: getDuration(totalDuration),
      businessId: businessSelected.id,
      colaboratorId: service.ownerService.id,
      clientId: user.id,
      services: totalServices
    };

    console.log(data);
    //dispatch(createAppointmentThunk(data));
  };

  useEffect(() => {
    const category = categories.find(c => c.id === service.service.categoryId);
    setTotalPrice(service.price);
    setTotalDuration(category.duration);
  }, []);

  const getNameCategory = category => {
    const { name } = categories.find(c => c.id === category);
    return capitalice(name);
  };

  return (
    <main>
      <article className='body-schedule'>
        <button className='arrow-back' onClick={() => navigate(`/home/${businessSelected.name}/${businessSelected.id}`)}>
          <img src={arrowBack} alt='arrow_back' />
        </button>
        <section className='service'>
          <h3>Fecha y Hora dela reserva</h3>
          <div className='date-service'>
            <input type='date' onChange={e => setDate(e.target.value)} />
            <div onClick={() => setShowList(!showList)}>
              <b className='date-service-div-b'>{hours}</b>
              <ul className={`date-service-div-ul ${showList ? 'show-hours' : ''}`}>{businessSelected?.id && getAvailable(service?.ownerService['workingHours'])}</ul>
            </div>
          </div>
          <h3>Servicios extras</h3>
          <div className='add-service'>
            {categories.map(
              category =>
                service.service.categoryId !== category.id && (
                  <div key={category.id} className='list-service'>
                    <input type='checkbox' id={category.id} onChange={e => selectAditionals(category, e.target.checked)} />
                    <label htmlFor={category.id}>{capitalice(category.name)}</label>
                  </div>
                )
            )}
          </div>
        </section>
        <section className='resume'>
          <h3>Resumen de servicio</h3>
          <div className='detail-service body'>
            <p className='detail-service-name'>
              {getNameCategory(service.service.categoryId)} | {service.service.name}
            </p>
            <p className='detail-service-date-time'>
              <span>Día: {date}</span> <span>Hora: {hours}</span>
            </p>
            <p className='detail-service-aditionals'>
              {totalServices.map(item => (
                <span key={item.id}>{capitalice(item.name)}</span>
              ))}
            </p>
            <p className='detail-service-total'>Total: $ {totalPrice.toFixed(2)}</p>
            <p className='detail-service-colaborator'>
              {service.ownerService.name} {service.ownerService.surname}
            </p>
          </div>
        </section>
        <button onClick={() => create()} className='btn-shedule body' disabled={hours === 'Seleccionar...' || date === ''}>
          Agendar
        </button>
      </article>
    </main>
  );
};

export default Schedule;
