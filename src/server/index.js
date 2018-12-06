const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/routes')(app);

app.listen(3001, () => console.log('Listening on port 3001!'));
