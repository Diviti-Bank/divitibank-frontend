const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const distFolder = path.join(__dirname, 'dist/divitibank-frontend/browser');
const indexHtmlPath = path.join(distFolder, 'assets/index.html');

app.use(express.static(distFolder));

app.get('*', (req, res) => {
  res.sendFile(indexHtmlPath);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});