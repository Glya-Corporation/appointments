const { AuthServices } = require('../services');

const login = async (req, res, next) => {
    try {
        const path = req.route.path;
        const credentials = req.body;
        let result = null
        console.log(path)
        if(path.includes('client')) {
            result = await AuthServices.loginClient(credentials);
        } else if(path.includes('business')) {
            result = await AuthServices.loginBusiness(credentials);
        }
        if (result) {
            const { email, password, id, firstName, lastName, roleId, phoneNumber, isVerify, codeVerify, cart } = result;
            const token = await AuthServices.generateToken({ email, password, id });
            const user = { email, id, firstName, lastName, roleId, phoneNumber, isVerify, codeVerify, cart };
            res.status(200).json({ user, token: token });
        } else {
            res.status(400).json({ message: "Wrong password or email" });
        }
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        })
    }
}

module.exports = login;