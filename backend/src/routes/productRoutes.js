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

module.exports = router;