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

const UpdateUser = async (req, res) => {
    try {
        const { _id, UserUpdate } = req.body;
        const newUser = await USERMODEL.findOneAndUpdate(
            { _id },
            UserUpdate,
            { new: true, runValidators:true, lean:true,}
        )
        res.status(200).json({
            succsess: !!newUser,
            message: "user updated " + !!newUser ? "succsess ✅" : "faild ❌",
            newUser
        });
    }
    catch (error) {
        res.status(500).json({
            succsess: false,
            errormessage: error.massage,
            message: "I am so sory"
        })
    };
}

module.exports = {
    createUser,
    login,
    UpdateUser,
};