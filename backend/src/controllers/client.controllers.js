const { ClientServices } = require('../services');

const createClient = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ClientServices.createClient(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ClientServices.getClient(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllClientsByBusinessId = async (req, res, next) => {
  try {
    const businessId = req.params.id;
    const result = await ClientServices.getAllClientsByBusinessId(businessId);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const result = await ClientServices.updateClient(id, body);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ClientServices.deleteClient(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createClient, getClient, getAllClientsByBusinessId, updateClient, deleteClient };
