const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello API');
});

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy cực mượt tại: http://localhost:${PORT}`);
});