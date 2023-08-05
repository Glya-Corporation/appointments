const { AppointmentServices } = require('../services');

const createAppointment = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await AppointmentServices.createAppointment(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await AppointmentServices.getAppointment(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllAppointmentsByBusiness = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await AppointmentServices.getAllAppointmentsByBusiness(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllAppointmentsByClient = async (req, res, next) => {
  try {
    console.log('controller')
    const id = req.params.id;
    //const result = await AppointmentServices.getAllAppointmentsByClient(id);
    res.status(200).json({hi: 'hi'});
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await AppointmentServices.updateAppointment(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await AppointmentServices.deleteAppointment(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createAppointment, getAppointment, getAllAppointmentsByBusiness, getAllAppointmentsByClient, updateAppointment, deleteAppointment };
