const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home');
const weatherRoute = require('./routes/weather');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));

app.use('/', homeRoute);
app.use('/weather', weatherRoute);

app.listen(port, () => console.log('Server is listening on port ', port));
