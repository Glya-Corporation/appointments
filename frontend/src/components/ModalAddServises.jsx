import {Modal, Button} from 'react-bootstrap'


const ModalAddServices = ({data, ...props}) => {
  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='price'/>
          <input type='date'/>
        </form>
      </Modal.Body>
      <Modal.Footer>
            <Button onClick={props.onHide} variant='success'>Close</Button>
          </Modal.Footer>
    </Modal>  
  )
}

export default ModalAddServices;