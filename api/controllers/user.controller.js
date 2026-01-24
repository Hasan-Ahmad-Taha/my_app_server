const USERMODEL = require("../modules/user.model");

const createUser = async (req, res) => {
    const {
        name,
        phonenumber,
        age,
        password,
    } = req.body
    try {
        const user = await USERMODEL.create({
            name,
            phonenumber,
            age,
            password
        })
        res.status(200).json({
            user,
            sucsess: true,
            message: "welcome" + name
        });
    } catch (error) {
        res.status(400).json({
            succsess: false,
            message: error.message,
            error: error
        });
    }
};
const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await USERMODEL.findOne({ name });
        if (!user) {
            res.status(400).json({
                success: false,
                Message: "user not found"
            })
            return;
        }
        if (user.password === password) {
            res.status(200).json({
                user,
                success: true,
                Message: "welcome" + user.name
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: "wrong password"
            })
        }
    }
    catch (error) {
        res.statas(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    login
}