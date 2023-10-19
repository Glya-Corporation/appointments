import {Modal, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'


const ModalAddServices = ({data, ...props}) => {
  
  const {handlesubmit, register, reset} = useForm();
  
  const submit = data => {
    const newArray = [
      {
        name: data.name1,
        price: data.price1,
        duration: data.duration1
      },
      {
        name: data.name2,
        price: data.price2,
        duration: data.duration2
      },
      {
        name: data.name3,
        price: data.price3,
        duration: data.duration3
      }
    ]
    
    console.log(newArray)
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