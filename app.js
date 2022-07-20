const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

const customerRoutes = require('./modules/routes/router');

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'modules/views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'horarios-proyecto-final'
}, 'single'));

app.use(express.static(path.join(__dirname, '/modules/public')));

app.get('/', customerRoutes);

app.listen(5000, ()=>{
    console.log('Corriendo en http://localhost:5000');
});