import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setCategory from '../functions/setCategory';
import ModalDetail from '../components/ModalDetail';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getAllAppointmentsThunk } from '../store/slices/appointments.slice';
import { getServicesThunk } from '../store/slices/services.slice';

const HistorialBusiness = () => {
  const user = useSelector(state => state.user);
  const allAppointments = useSelector(state => state.appointments);
  const services = useSelector(state => state.services);

  const [modalShow, setModalShow] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [itemSelected, setItemSelected] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    setAllAppointments();
  }, [allAppointments]);

  useEffect(() => {
    if (user.id) {
      dispatch(getAllAppointmentsThunk(user.business?.[0].id));
      dispatch(getServicesThunk(user.business?.[0].id));
    }
  }, [user]);

  const setAllAppointments = () => setAppointments(setCategory(services, allAppointments));

  const activateModal = item => {
    setItemSelected(item);
    setModalShow(true);
  };

  const filterAppointments = status => {
    setAppointments(
      setCategory(
        services,
        allAppointments.filter(item => item.status === status)
      )
    );
  };

  const filterDate = date => {
    if (Boolean(date)) {
      setAppointments(
        setCategory(
          services,
          allAppointments.filter(item => item.dateTime.date === date)
        )
      );
    } else {
      setAllAppointments();
    }
  };

  const renderTooltip = props => (
    <Tooltip id='button-tooltip' {...props}>
      Próximamente
    </Tooltip>
  );

  return (
    <main className='container-main'>
      <ModalDetail show={modalShow} onHide={() => setModalShow(false)} item={itemSelected} />
      <h3>Historial de Reservas</h3>
      <div className='search-filter-container'>
        <input type='date' placeholder='Buscar fecha' onChange={e => filterDate(e.target.value)} />
      </div>
      <ul className='filter-history-business'>
        <li className='body' onClick={() => filterAppointments('approved')}>
          Aprobadas
        </li>
        <li className='body' onClick={() => filterAppointments('pending')}>
          Pendientes
        </li>
        <li className='body' onClick={() => filterAppointments('canceled')}>
          Canceladas
        </li>
        <li className='body' onClick={() => filterAppointments('inProgress')}>
          Calificadas
        </li>
        <li className='body' onClick={() => filterAppointments('finished')}>
          No Calificada
        </li>
      </ul>
      <ul className='list-history-business'>
        {appointments.map(appointment => (
          <li key={appointment.id} className='item-history-business body'>
            <span>
              {appointment.client.name} {appointment.client.surname}
            </span>
            <span>{appointment.dateTime.date}</span>
            <div style={{ gridColumn: '3/3', gridRow: '1/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg onClick={() => activateModal(appointment)} height='25' viewBox='0 96 960 960' width='25' fill='#00000050'>
                <path d='M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z' />
              </svg>
            </div>
            <span>{appointment.service}</span>
          </li>
        ))}
      </ul>
      {/* <div className='paginate-container'>
        <button>Prev</button>
        <ul className='paginate-numbers'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
        <button>Next</button>
      </div> */}
      <OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
        <button className='body btn btn-view-resume'>Resumen de Ganancias</button>
      </OverlayTrigger>
    </main>
  );
};

export default HistorialBusiness;
