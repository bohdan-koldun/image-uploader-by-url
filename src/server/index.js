const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const mongooseConnection = require('./db/dbconnect').connection;

const app = express();

app.use(
  session({
    secret: 'sessionsecretsessionsecret',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection
    })
  })
);

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.listen(8080, () => console.log('Listening on port 8080!'));
