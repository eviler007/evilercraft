const history = require('connect-history-api-fallback');
const connect = require('connect');
const httpPort = 443;

const app = connect();
app.use(history()).listen(httpPort);