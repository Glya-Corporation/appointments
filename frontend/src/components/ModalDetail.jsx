import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import capitalice from '../functions/capitalizar.js';
import getDurationHour from '../functions/getDurationHour.js';

const ModalDetail = ({ item, ...props }) => {
  return (
    <>
      {item.id && (
        <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>{capitalice(item.service)}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>
                <b>Hora:</b> {item.dateTime.time}
              </li>
              <li>
                <b>Fecha:</b> {item.dateTime.date}
              </li>
              <li>
                <b>Duración:</b> {getDurationHour(item.totalDuration)}
              </li>
              <li>
                <b>Cliente:</b> {item.client.name} {item.client.surname}
              </li>
              <li>
                <b>Colaborador (a):</b> {item.colaborator.name} {item.colaborator.surname}
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <button className='body btn' onClick={props.onHide} variant='success'>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ModalDetail;
