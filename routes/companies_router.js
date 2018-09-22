const express = require('express');
const companiesRouter = express.Router();

module.exports = (knex) => {
  companiesRouter
    .get('/company/:id', (req, res) => {

    })
    
    .post('/company/:id', (req, res) => {

    })
    
    .post('/company', (req, res) => {

  });

  return companiesRouter;

};

  
