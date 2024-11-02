const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(Сервер запущен на http://localhost:${PORT});
});
