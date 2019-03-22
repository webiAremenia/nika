import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



import adminRoutes from './admin/routes/admin';

const app = express();


app.set('view engine', 'ejs');



// mongoDB settings -->

const mongoDB = process.env.MONGO_ATLAS_PW;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ------------------->



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorisation');
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});


app.use('/uploads', express.static(__dirname + '_uploads'));
app.use('/admin', adminRoutes);



//----------- Connect to Angular Admin

app.use('/admin-panel', express.static(__dirname + '/../../admin/dist/admin'));
app.use('/admin-panel/*', express.static(__dirname + '/../../admin/dist/admin'));

//----------- Connect to Angular client


app.use('/', express.static(__dirname + '/../../client/dist/front'));
app.use('/*', express.static(__dirname + '/../../client/dist/front'));

//--------------------------------------


app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    res.status(err.status).json({error: err.message})
});
app.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).json({error: err.message});
});

module.exports = app;
