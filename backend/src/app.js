const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

// Gắn các route liên quan đến sản phẩm vào tiền tố /api/products
app.use('/api/products', productRoutes);

// Route test dự phòng ở gốc
app.get('/', (req, res) => {
    res.send('Server is running smoothly!');
});

module.exports = app;