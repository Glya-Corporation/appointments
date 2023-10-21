import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { updateServiceThunk } from '../store/slices/index';

const ModalUpdateServices = ({ data, ...props }) => {
  const { handleSubmit, register, reset } = useForm();

  const { business } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const submit = update => {
    for (const property in update) {
      if (update[property] === '') delete update[property];
    }

    const object = { ...data };

    object.businessId = business?.[0].id;

    dispatch(updateServiceThunk(object, update));
    
    reset();
    setTimeout(() => {
      props.onHide();
    }, 1000);
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Servicio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(submit)} className='form-services-update'>
          <input type='text' placeholder={data.name} {...register('name')} />
          <input type='time' defaultValue={data.duration} {...register('duration')} />
          <input type='number' placeholder={data.price} {...register('price')} />
          <Button variant='success' type='submit'>
            Actualizar Servicio
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalUpdateServices;
