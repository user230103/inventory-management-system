const app = require('./src/app'); // Import app từ thư mục src
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});