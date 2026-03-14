const productModele = require("../modules/product.model");

// إنشاء منتج جديد
const createProduct = async (req, res) => {
    const { name, price, image, category } = req.body;
    try {
        const product = await productModele.create({ name, price, image, category });
        res.status(200).json({
            product,
            success: true, // تم تصحيح الإملاء من sucsess
            message: "product created"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

// جلب جميع المنتجات
const findAllProduct = async (req, res) => {
    try {
        const product = await productModele.find(req.body);
        res.status(200).json({
            product,
            success: true,
            message: "products fetched successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

// --- الدالة الجديدة لحذف منتج ---
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // نأخذ المعرف من رابط الطلب (URL)
        const product = await productModele.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error: error
        });
    }
};

module.exports = {
    createProduct,
    findAllProduct,
    deleteProduct, // لا تنسَ تصدير الدالة هنا
};