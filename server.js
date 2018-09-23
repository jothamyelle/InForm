const ENV = process.env.ENV || "development";
const express = require('express');
const path = require('path');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getEmployees', (req,res) => {
    var employeeList = ["John Smith", "Dave M", "Jamie D", "Ben D", "Jotham Y"];
    res.json(employeeList);
    console.log('Sent list of employees');
});

function getJobs() {
    return knex.select().from('jobs')
    .then(function(rows) {
        console.log('knex getJobs', rows);
        return rows;
    });
}

app.get('/api/getJobs', (req,res) => {
  var jobList = getJobs().then(function(result) {
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