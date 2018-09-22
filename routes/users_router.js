// Require Express and set router

const express = require('express');
const usersRouter = new express.Router();

// Require bcrypt to hash passwords

const bcrypt = require('bcrypt');

// Routes

usersRouter

  // Register and Login

  .get('/register', (req, res) => {

  })

  .post('/register', (req, res) => {

  })

  .get('/login', (req, res) => {

  })

  .post('/login', (req, res) => {

  })

  // Edit profile

  .post('/users/:id' (req, res) => {

  })

  .post("/logout", (req, res) => {

  })

  // Users

  .get('/users', (req, res) => {

  })

  .get('/users/:id', (req, res) => {

  })


module.exports = usersRouter;