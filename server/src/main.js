// import 'module-alias/register';
import app from './app';
require("babel-core/register");
require("babel-polyfill");
import '../config/config.js';

app.listen(global.gConfig.node_port, () => {
    console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});



// const server = http.createServer(app);
// import http from 'http';
