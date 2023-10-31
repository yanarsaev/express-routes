const express = require('express');
const app = express();

app.use(require('./routes/contacts.route'));
app.use(require('./routes/images.route'));

app.listen(4000, () => {
    console.log('Сервер успешно запущен');
})