const { BFServices } = require('../services');

const createFavorite = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await BFServices.createFavorite(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getAllFavorites = async (req, res, next) => {
  try {
    const id = req.params.id;
    const route = req.route.path;
    let result = null;
    if (route.includes('client')) {
      result = await BFServices.getAllFavorites(id, 'client');
    } else {
      result = await BFServices.getAllFavorites(id, 'business');
    }
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await BFServices.deleteFavorite(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createFavorite, getAllFavorites, deleteFavorite };
