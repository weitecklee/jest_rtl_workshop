const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../public/')));
app.use(cors());

app.get('/loading', (req, res) => {
  setTimeout(() => {
    res.sendStatus(200);
  }, 100);
});

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
