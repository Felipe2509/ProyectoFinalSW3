const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { json } = require('express/lib/response');

const app = express();


// configuracion 
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'modules/views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'horarios-proyecto-final2'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// archivos estaticos
app.use(express.static(path.join(__dirname, '/modules/public')));

// rutas
app.use('/', require('./modules/router'));

// inicio de servidor
app.listen(5000, ()=>{
    console.log('Corriendo en http://localhost:5000');
});