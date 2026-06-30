const express = require('express');
const app = express();

// Middleware để đọc dữ liệu JSON từ request body
app.use(express.json());

// Route test cơ bản
app.get('/', (req, res) => {
    res.send('Hello API');
});

// Xuất app ra để server.js hoặc file test có thể dùng
module.exports = app;