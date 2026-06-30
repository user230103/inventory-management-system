const prisma = require('../config/prisma');

const getProducts = async (req, res) => {
    try {
        // Thay vì viết: SELECT * FROM products;
        const products = await prisma.products.findMany();
        
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Lỗi khi lấy danh sách sản phẩm!",
            error: error.message
        });
    }
};

module.exports = {
    getProducts
};