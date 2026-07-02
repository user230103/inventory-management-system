const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const productController = require('../controllers/productController');

const prisma = new PrismaClient();

router.get('/', productController.getProducts);

router.post('/', async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;

        const product = await prisma.products.create({
            data: {
                name,
                description,
                price: Number(price),
                stock: Number(stock)
            }
        });

        res.status(201).json({ success: true, data: product });
    } catch (error) {
        console.error('CREATE PRODUCT ERROR:', error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// GET /api/products/:id — lấy 1 sản phẩm
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const product = await prisma.products.findUnique({
            where: { id }
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }

        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('GET PRODUCT BY ID ERROR:', error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// PUT /api/products/:id — cập nhật sản phẩm
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, price, stock } = req.body;

        const product = await prisma.products.update({
            where: { id },
            data: {
                name,
                description,
                price: Number(price),
                stock: Number(stock),
                updated_at: new Date()
            }
        });

        res.json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('UPDATE PRODUCT ERROR:', error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// DELETE /api/products/:id — xóa sản phẩm
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        await prisma.products.delete({
            where: { id }
        });

        res.json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('DELETE PRODUCT ERROR:', error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;