const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Đường dẫn này thực tế sẽ là /api/products/ (khi gắn vào app.js)
router.get('/', productController.getProducts);

module.exports = router;