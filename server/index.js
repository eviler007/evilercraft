const history = require('connect-history-api-fallback');
const connect = require('connect');
const path = require('path');

const app = connect();
app.use(history());

app.use(path.join(__dirname + '/dist'));