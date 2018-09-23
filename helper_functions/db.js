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

exports.getJobs = getJobs