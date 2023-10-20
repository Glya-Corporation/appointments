import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { createServicesThunk } from '../store/slices/index';

const ModalAddServices = ({ data, ...props }) => {
  const { handleSubmit, register, reset, setValue, getValues } = useForm();
  const [inputs, setInputs] = useState([1, 2, 3]);
  const maxInputs = 20;

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
      businessId: data.business
    }));

    const dataArrayCleared = dataArray.filter(item => item.name !== '' && item.price !== '');

    createServicesThunk(dataArrayCleared);
    reset();
    setInputs([1, 2, 3]);
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
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
          <Button variant='success' type='submit'>
            Guardar Servicios
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={addInput} disabled={inputs.length === maxInputs}>
          Agregar más
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddServices;
