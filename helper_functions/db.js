const express = require('express');
const app = express();
const ENV = process.env.ENV || "development";

const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');

app.use(knexLogger(knex));

exports = module.exports;

function getJobs() {
  return knex.select().from('jobs')
  .then(function(rows) {
      console.log('Knex job query', rows);
      return rows;
  });
}

function getUsers() {
  return knex.select().from('users')
  .then(function(rows) {
      console.log('Knex employee query', rows);
      return rows;
  });
}

function getUserById(id) {
  return knex.select()
    .from('users')
    .where( {id: id} )
    .then(function(rows) {
        console.log('Knex user profile query', rows);
        return rows;
    });
}

function getUserRoleById(id) {
  return knex.select()
    .from('user_roles')
    .where( {id: id} )
    .then(function(rows) {
        console.log('Knex user role query', rows);
        return rows;
    });
}

function getUserRoles() {
  return knex.select().from('user_roles')
  .then(function(rows) {
      console.log('Knex user roles query', rows);
      return rows;
  });
}

exports.getJobs = getJobs;
exports.getUsers = getUsers;
exports.getUserRoles = getUserRoles;
exports.getUserById = getUserById;
exports.getUserRoleById = getUserRoleById;

