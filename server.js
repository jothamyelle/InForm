const express = require('express');
const app = express();
const path = require('path');

const ENV = process.env.ENV || "development";

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(knexConfig[ENV]);

// Database helper functions
const dbHelpers = require('./helper_functions/db.js')

app.use(knexLogger(knex));
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Api endpoint that returns a list of items
app.get('/api/getEmployees', (req,res) => {
  var employeeList = ["John Smith", "Dave M", "Jamie D", "Ben D", "Jotham Y"];
  res.json(employeeList);
  console.log('Sent list of employees');
});

// Api endpoint that returns a list of jobs
app.get('/api/getJobs', (req,res) => {
  dbHelpers.getJobs().then(function(result) {
    res.json(result);
    console.log('Sent list of Jobs');
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3005;
app.listen(port);

console.log('App is listening on port ' + port);