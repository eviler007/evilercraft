const history = require('connect-history-api-fallback');
const connect = require('connect');
const httpPort = 80;

const app = connect();
app.use(history()).listen(httpPort);