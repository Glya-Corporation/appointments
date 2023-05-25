const { CategoryBusinessServices } = require('../services');

/* const createCategoryBusiness = async (req, res, next) => {
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
}; */

const getAllCategoryBusiness = async (req, res, next) => {
  try {
    const result = await CategoryBusinessServices;
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

/* const updateCategoryBusiness = async (req, res, next) => {
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

const deleteCategoryBusiness = async (req, res, next) => {
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
}; */

module.exports = { getAllCategoryBusiness }