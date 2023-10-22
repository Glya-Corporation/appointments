import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createColaboratorThunk } from '../store/slices';

const ModalAddColborators = ({ ...props }) => {
  const { handleSubmit, register, reset, setValue, getValues } = useForm();
  const [inputs, setInputs] = useState([1, 2]);
  const maxInputs = 20;

  const colaborators = useSelector(state => state.colaborators);
  const { business } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const addInput = () => {
    if (inputs.length < maxInputs) {
      setInputs([...inputs, inputs.length + 1]);
    }
  };

  const submit = () => {
    const dataArray = inputs.map(element => ({
      name: getValues(`name${element}`),
      surname: getValues(`surname${element}`),
      number: getValues(`number${element}`),
      salary: getValues(`salary${element}`),
      email: getValues(`email${element}`),
      businessId: business[0].id,
      password: business[0].name.split(' ').join('').toLowerCase() + '123'
    }));

    const dataArrayCleared = dataArray.filter(item => item.name !== '' && item.surname !== '' && item.email !== '');

    if (dataArrayCleared.length < 1) return;
    
    dispatch(createColaboratorThunk(dataArrayCleared, colaborators));
    reset();
    setInputs([1, 2]);
    setTimeout(() => {
      props.onHide();
    }, 1000);
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Nuevos Colaboradores</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(submit)} className='form-services'>
          {inputs.map(element => (
            <div key={element} className='list-inputs add-col'>
              <input type='text' placeholder='Nombres' {...register(`name${element}`)} />
              <input type='text' placeholder='Apellidos' {...register(`surname${element}`)} />
              <input type='tel' placeholder='Teléfono' {...register(`number${element}`)} />
              <input type='number' placeholder='Sueldo' {...register(`salary${element}`)} />
              <input type='email' placeholder='Correo' {...register(`email${element}`)} />
            </div>
          ))}
          <Button variant='success' type='submit'>
            Guardar Colaboradores
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

export default ModalAddColborators;
