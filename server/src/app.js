import '../config/config.js';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('../config/winston');
const app = express();

const processImage = require('express-processimage');

require('./seed').createPage();
require('./seed').createLogos();
require('./seed').createMenus();
require('./seed').createDefaultAdmin();
require('./seed').createTeam();


const mongoDB = global.gConfig.database;
mongoose.connect(mongoDB, {useNewUrlParser: true, useCreateIndex: true})
    .then(_ => {
        console.log('MongoDB has connected ...')
    })
    .catch(err => {
        console.log('Error MongoDB not connected ...')
    });

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(require('cors')());

// app.use((req, res) => {
//     res.setHeader( 'Cache-Control', 'public,max-age=0');
// });

app.use(morgan('combined', {stream: winston.stream}));

app.use(processImage(__dirname + '/../_uploads'));
app.use('/uploads', express.static(__dirname + '/../_uploads'));

const admin = require('./admin/routes/admin');
const api = require('./api/routes/api');

app.use('/admin', admin);
app.use('/api', api);

//----------- Connect to Angular client

app.use('/admin-panel', express.static(__dirname + '/../../admin/dist/Project'));
app.use('/admin-panel/*', express.static(__dirname + '/../../admin/dist/Project'));

app.use('/', express.static(__dirname + '/../../client/dist/front'));
app.use('/*', express.static(__dirname + '/../../client/dist/front'));


//--------------------------------------


app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    res.status(err.status).json({error: err.message})
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = err;
    winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500);
    console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', err);
    res.render('error');
});


module.exports = app;


