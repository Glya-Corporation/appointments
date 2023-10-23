import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createServicesThunk } from '../store/slices/index';

const ModalAddServices = ({ businessId, ...props }) => {
  const { handleSubmit, register, reset, setValue, getValues } = useForm();
  const [inputs, setInputs] = useState([1, 2, 3]);
  const maxInputs = 20;

  const services = useSelector(state => state.servicesCategories);

  const dispatch = useDispatch();

  const addInput = () => {
    if (inputs.length < maxInputs) {
      setInputs([...inputs, inputs.length + 1]);
    }
  };

  const submit = () => {
    const dataArray = inputs.map(element => ({
      name: getValues(`name${element}`),
      duration: getValues(`duration${element}`),
      price: getValues(`price${element}`),
      businessId
    }));

    const dataArrayCleared = dataArray.filter(item => item.name !== '' && item.price !== '');

    dispatch(createServicesThunk(dataArrayCleared, services));
    reset();
    setInputs([1, 2, 3]);
    setTimeout(() => {
      props.onHide();
    }, 1000);
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Servicios Principales</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(submit)} className='form-services'>
          {inputs.map(element => (
            <div key={element} className='list-inputs'>
              <input type='text' placeholder='Nombre' {...register(`name${element}`)} />
              <input type='time' defaultValue='01:00' {...register(`duration${element}`)} />
              <input type='number' placeholder='Precio' {...register(`price${element}`)} />
            </div>
          ))}
          <button className='body btn' type='submit'>
            Guardar Servicios
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className='body btn' onClick={addInput} disabled={inputs.length === maxInputs}>
          Agregar más
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddServices;
