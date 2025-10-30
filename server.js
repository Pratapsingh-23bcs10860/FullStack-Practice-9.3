const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('Hello from Backend!'));
app.listen(80, () => console.log('Server running on port 80'));

