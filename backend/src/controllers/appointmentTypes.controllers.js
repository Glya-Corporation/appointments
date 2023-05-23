const { AppointmentTypesServices } = require('../services');

const createAppointmentType = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await AppointmentTypesServices.createAppointmentTypes(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAllAppointmentsTypes = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await AppointmentTypesServices(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateAppointmentType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await AppointmentTypesServices(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteAppointmentType = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await AppointmentTypesServices(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createAppointmentType, getAllAppointmentsTypes, updateAppointmentType, deleteAppointmentType };
