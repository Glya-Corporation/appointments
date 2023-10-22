const { ColaboratorServices } = require('../services');

const createColaborator = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ColaboratorServices.createColaborator(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getColaborator = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ColaboratorServices.getColaborator(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllColaborators = async (req, res, next) => {
  try {
    const businessId = req.params.id;
    const result = await ColaboratorServices.getAllColaborators(businessId);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateColaborator = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await ColaboratorServices.updateColaborator(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteColaborator = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ColaboratorServices(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createColaborator, getColaborator, getAllColaborators, updateColaborator, deleteColaborator };
