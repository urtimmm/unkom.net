const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Указываем папку для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
