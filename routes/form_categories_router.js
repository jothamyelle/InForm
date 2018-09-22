const express = require('express');
const formCategoriesRouter = express.Router();

module.exports = (knex) => {
  formCategoriesRouter
    .get('/form_categories', (req, res) => {

    })
    
    .post('/form_categories', (req, res) => {

    })

    .get('/form_categories/:id', (req, res) => {

    })
    
    .post('/form_categories/:id', (req, res) => {

  });
  
  return formCategoriesRouter;

};