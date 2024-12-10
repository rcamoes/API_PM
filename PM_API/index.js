const express = require('express');
const cors = require('cors');
const schools = require('./data/schools.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());

// Rotas
app.get('/schools', (req, res) => {
  res.json(schools);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});