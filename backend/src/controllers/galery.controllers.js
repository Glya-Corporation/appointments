const { GaleryServices  } = require('../services');

const createPhoto = async (req, res, next) => {
  try {
    const body = req.body;

    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getPhoto = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllPhotos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await GaleryServices.getAllPhotos(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updatePhoto = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deletePhoto = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = { createPhoto, getPhoto, getAllPhotos, updatePhoto, deletePhoto };
