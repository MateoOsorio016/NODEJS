require('dotenv').config();

const hbs = require("hbs");
const path = require("path");

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/public/views/partials'));

app.get('/', (req,res) => {
    res.render('login');
})

app.get('/main', (req, res) => {
    res.render('dash');
})
app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/clientes', (req, res) => {
    res.render('clientes');
})
app.get('/proveedores', (req, res) => {
    res.render('proveedores');
})
app.get('/contratos', (req, res) => {
    res.render('contratos');
})

app.get('/productos', (req, res) => {
    res.render('productos');
})

app.get('/dash', (req, res) => {
    res.render('dash');
})

app.get('/empaquetado', (req, res) => {
    res.render('empaquetado');
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
