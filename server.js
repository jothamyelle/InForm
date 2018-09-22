require('dotenv').config();
const express         = require('express');
const ENV             = process.env.ENV || 'development';
const knexConfig      = require("./knexfile");
const knex            = require("knex")(knexConfig[ENV]);
const knexLogger      = require('knex-logger');
const app             = express();

const PORT            = process.env.PORT || 3005;
const bodyParser      = require('body-parser');
const cookieSession   = require('cookie-session');

app.use(knexLogger(knex));

app.get("/poop", (req, res) => {
  res.send({express: 'Hello from Express'});
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
