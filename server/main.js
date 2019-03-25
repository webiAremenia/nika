const app = require('./app');
const config = require('./config/configs');
const port = config.port;

app.listen(port, console.log(`Server has started in ${port} port ...`));

