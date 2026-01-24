const productModele = require("../modules/product.model");

const createProduct = async (req, res) => {
    const {
        name,
        price,
        image,
        category
    } = req.body
    try {
        const product = await productModele.create({
            name,
            price,
            image,
            category,

        })

        res.status(200).json({
            product,
            sucsess: true,
            message: "product created"
        });
    } catch (error) {
        res.status(400).json({
            succsess: false,
            message: error.message,
            error: error
        });
    }
};
const findAllProduct=async  (req, res) => {
    const {
        name,
        price,
        image,
        category
    } = req.body
    try {
        const product = await productModele.find({
            name,
            price,
            image,
            category,

        })

        res.status(200).json({
            product,
            sucsess: true,
            message: "product created"
        });
    } catch (error) {
        res.status(400).json({
            succsess: false,
            message: error.message,
            error: error
        });
    }
};


module.exports = {
    createProduct,
}