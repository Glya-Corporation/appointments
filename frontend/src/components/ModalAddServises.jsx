import {Modal, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'


const ModalAddServices = ({data, ...props}) => {
  
  const {handlesubmit, register, reset} = useForm();
  
  const submit = data => {
    console.log(data)
  }
  
  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handlesubmit(submit)}>
          <div>
          <input type='text' placeholder='Nonmbre' {...register('name1')}/>
          <input type='text' placeholder='Price' {...register('price1')}/>
          <input type='date' placeholder='Duración' {...register('duration1')}/>
          </div>
          <div>
          <input type='text' placeholder='Nonmbre' {...register('name2')}/>
          <input type='text' placeholder='Price' {...register('price2')}/>
          <input type='date' placeholder='Duración' {...register('duration2')}/>
          </div>
          <div>
          <input type='text' placeholder='Nonmbre' {...register('name3')}/>
          <input type='text' placeholder='Price' {...register('price3')}/>
          <input type='date' placeholder='Duración' {...register('duration3')}/>
          </div>
          <div>
          <input type='text' placeholder='Nonmbre' {...register('name4')}/>
          <input type='text' placeholder='Price' {...register('price4')}/>
          <input type='date' placeholder='Duración' {...register('duration4')}/>
          </div>
          <button>Crear</button>
        </form>
      </Modal.Body>
      <Modal.Footer>
            <Button onClick={props.onHide} variant='success'>Close</Button>
          </Modal.Footer>
    </Modal>  
  )
}

export default ModalAddServices;