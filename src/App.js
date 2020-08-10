const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./ui-routes');
const app = express();

app.use('/get_meta_data', routes);
app.use('/', function(req, res){
    res.send('Home');
});
app.get('*',function (req, res) {
    res.redirect('/');
});

app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;