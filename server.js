const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getEmployees', (req,res) => {
    var employeeList = ["John Smith", "Dave M", "Jamie D", "Ben D", "Jotham Y"];
    res.json(employeeList);
    console.log('Sent list of employees');
});

app.get('/api/getJobs', (req,res) => {
  var jobList = ["Job 1", "Job 2", "Job 3", "Job 4", "Job 5"];
  res.json(jobList);
  console.log('Sent list of Jobs');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3005;
app.listen(port);

console.log('App is listening on port ' + port);