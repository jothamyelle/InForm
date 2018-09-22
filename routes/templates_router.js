"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/form_templates", (req, res) => {

  });
  
  router.post("/form_templates", (req, res) => {
    
  });
  
  router.get("/form_templates/:id", (req, res) => {

  });

  router.post("/form_templates/:id", (req, res) => {
    
  });

  router.post("/form_templates/:id/delete", (req, res) => {
    
  });

  return router;
}