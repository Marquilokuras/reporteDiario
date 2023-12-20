const express = require('express');
const logger = require('morgan');
const app = express();

const homeRouter = require('./routes/home');

app.use(express.json())
app.use(logger('dev'));
app.use(express.static('./public'));
app.set('view engine','ejs');

const port = 3000;

app.listen(port, () => {
    console.log('El servidor está funcionando en el puerto '+ port);
});

//Routes
app.use('/',homeRouter);