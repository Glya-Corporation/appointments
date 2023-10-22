const { UserServices } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await UserServices.createUser(data);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear user',
      errorContent: error
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUser(Number(id));
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuario',
      errorContent: error
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const result = await UserServices.updateUser(id, user);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createUser, getUser, getAllUsers, updateUser, deleteUser };
