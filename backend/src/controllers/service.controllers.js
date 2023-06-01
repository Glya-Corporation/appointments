const { ServiceServices } = require('../services');

const createService = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ServiceServices.createService(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAllServices = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ServiceServices.getAllServices(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ServiceServices.getAllCategories(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateService = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await ServiceServices.updateService(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteService = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ServiceServices.deleteService(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createService, getAllServices, getAllCategories, updateService, deleteService };
