"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/user_roles", (req, res) => {

  });
  
  router.post("/user_roles", (req, res) => {
    
  });
  
  router.get("/user_roles/:id", (req, res) => {

  });

  router.post("/user_roles/:id", (req, res) => {
    
  });

  router.post("/user_roles/:id/delete", (req, res) => {
    
  });

  return router;
}