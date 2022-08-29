const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let visits = 0;
let timeout;

app.use(express.static(path.join(__dirname, '../public/')));

app.put('/visits', (req, res) => {
  visits++;
  if (visits < 4) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      visits = 0;
    }, 10000);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
