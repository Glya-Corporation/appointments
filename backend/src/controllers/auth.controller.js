const { AuthServices } = require('../services');

const login = async (req, res, next) => {
  try {
    const path = req.route.path;
    const credentials = req.body;
    let result = null;
    if (path.includes('client')) {
      result = await AuthServices.loginClient(credentials);
    } else if (path.includes('business')) {
      result = await AuthServices.loginBusiness(credentials);
    }
    if (result) {
      const { email, password, id, role, name, surname, number, isVerify, business } = result;
      const token = await AuthServices.generateToken({ email, password, id });
      const user = { email, id, role, name, surname, number, isVerify, business };
      res.status(200).json({ user, token: token });
    } else {
      res.status(400).json({ message: 'Wrong password or email' });
    }
  } catch (error) {
    next({
      status: 400,
      message: error.message,
      errorContent: error
    });
  }
};

module.exports = login;
