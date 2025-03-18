const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/checkout', (req, res) => {
    const { name, address, city, zip, payment } = req.body;

    // Here, you would typically process the order (e.g., save to database)
    console.log('Order received:', { name, address, city, zip, payment });

    // Simulate order processing success
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});