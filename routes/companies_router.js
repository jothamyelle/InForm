const express = require('express');
const companiesRouter = express.Router();

module.exports = (knex) => {
  companiesRouter
    .get('/companies/:id', (req, res) => {

    })
    
    .post('/companies/:id', (req, res) => {

    })
    
    .post('/companies', (req, res) => {

  });

  return companiesRouter;

};

  
