// Require Express and set router

const express = require('express');
const router  = express.Router();

// Require bcrypt to hash passwords

// const bcrypt = require('bcrypt');

// Routes

module.exports = (knex) => {

  // Register and Login

  router.get('/register', (req, res) => {

  })

  router.post('/register', (req, res) => {

  })

  router.get('/login', (req, res) => {

  })

  router.post('/login', (req, res) => {

  })

  // Edit profile

  router.post('/users/:id', (req, res) => {

  })

  router.post("/logout", (req, res) => {

  })

  // Users

  router.get('/users', (req, res) => {

  })

  router.get('/users/:id', (req, res) => {

  })

  return router;

}