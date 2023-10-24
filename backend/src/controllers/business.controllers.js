const { BusinessServices } = require('../services');

const createBusiness = async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const result = await BusinessServices.createBusiness(id, body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getBusiness = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BusinessServices.getBusiness(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllBusinessByUserId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BusinessServices.getAllBusinessByUserId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllBusiness = async (req, res, next) => {
  try {
    const result = await BusinessServices.getAllBusiness();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los negocios',
      errorContent: error
    });
  }
};

const updateBusiness = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await BusinessServices.updateBusiness(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const updateSettings = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await BusinessServices.updateSettings(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteBusiness = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BusinessServices.deleteBusiness(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createBusiness, getBusiness, getAllBusinessByUserId, getAllBusiness, updateBusiness, updateSettings, deleteBusiness };
