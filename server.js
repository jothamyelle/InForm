require('dotenv').config();
const express = require('express');
const app = express();

const ENV = process.env.ENV || "development";

const knexConfig = require('./knexfile');
const knexLogger = require('knex-logger');
const knex = require('knex')(knexConfig[ENV]);

// Database helper functions
const dbHelpers = require('./helper_functions/db.js')

app.use(knexLogger(knex));

// Api endpoint that returns a list of users
app.get('/api/getUsers', (req,res) => {
  dbHelpers.getUsers().then(function(result) {
    res.json(result);
    console.log('Sent list of Employees');
  });
});

// Return user roles
app.get('/api/getUserRoles', (req,res) => {
  dbHelpers.getUserRoles().then(function(result) {
    res.json(result);
    console.log('Sent list of user roles');
  });
});

// Returns user by id
app.get('/api/getUser/:id', (req,res) => {
  dbHelpers.getUserById(req.params.id).then(function(result) {
    res.json(result);
    console.log('Sent user');
  });
});

// Returns user role
app.get('/api/getUserRole/:id', (req,res) => {
  dbHelpers.getUserRoleById(req.params.id).then(function(result) {
    res.json(result);
    console.log('Sent user role');
  });
});

// Api endpoint that returns a list of jobs
app.get('/api/getJobs', (req,res) => {
  dbHelpers.getJobs().then(function(result) {
    res.json(result);
    console.log('Sent list of Jobs');
  });
});

app.get('/api/getUserSubmittedFormsById/:id', (req,res) => {
  dbHelpers.getUserSubmittedFormsById(req.params.id).then(function(result) {
    res.json(result);
    console.log('Sent list of User\'s Submitted Forms');
  });
});

app.get(`/api/getHoursFromDateFilters/:date1/:date2`, (req,res) => {
  dbHelpers.getHoursFromDateFilters(req.params.date1, req.params.date2).then(function(result) {
    res.json(result);
    console.log('Sent Filtered list of All Employee\s Hours');
  });
});


app.get('/api/getFormSubmissions/', (req,res) => {
  dbHelpers.getFormSubmissions().then(function(result) {
    res.json(result);
    console.log('Sent list of all form submissions');
  })
});

// Api endpoint that returns form template categories
app.get('/api/getFormtemplateCategories', (req,res) => {
  dbHelpers.getFormtemplateCategories().then(function(result) {
    res.json(result);
    console.log('Sent Form Template Categories');
  });
});

// Api endpoint that returns form templates
app.get('/api/getFormTemplates', (req,res) => {
  dbHelpers.getFormTemplates().then(function(result) {
    res.json(result);
    console.log('Sent list of form templates');
  });
});

app.get('/api/getFormSubmissionsByDate/:date', (req,res) => {
  dbHelpers.getFormSubmissionsByDate(req.params.date).then(function(result) {
    res.json(result);
    console.log('Sent list of submitted forms from date');
  });
});



const port = process.env.PORT || 3005;
app.listen(port);

console.log('App is listening on port ' + port);
