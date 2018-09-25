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

//Function to return all the information needed to render data on Employee Profile Page
function getUserSubmittedFormsById(id) {
	return knex.select('form_templates.type', 'form_templates.form_category_id', 'form_templates.company_id',
		'submitted_forms.date_created','form_categories.name', 'submitted_forms.id')
		.from('form_templates')
		.join('submitted_forms', {'submitted_forms.form_template_id': 'form_templates.id'})
		.join('form_categories', {'form_categories.id': 'form_templates.form_category_id'})
		.where ({'submitted_forms.user_id': id})
		.then(function(rows) {
				console.log('Knex user role query', rows);
				return rows;
	})
}

function getHoursFromDateFilters(date1, date2) {
	return knex.select('hours.minutes_worked', 'users.first_name', 'users.last_name', 'users.id')
		.from('hours')
		.join('users', {'users.id':'hours.user_id'})
		.whereBetween('date_worked', [date1, date2])
		.then(function(rows) {
				console.log('Knex employee minutes worked query', rows);
				return rows;
	});
}

function getFormtemplateCategories() {
	return knex.select().from('form_categories')
  .then(function(rows) {
      console.log('Knex form template categories query', rows);
      return rows;
  });
}

function getFormTemplates() {
	return knex.select().from('form_templates')
  .then(function(rows) {
      console.log('Knex form templates query', rows);
      return rows;
  });
}

exports.getJobs = getJobs;
exports.getUsers = getUsers;
exports.getUserRoles = getUserRoles;
exports.getUserById = getUserById;
exports.getUserRoleById = getUserRoleById;
exports.getUserSubmittedFormsById = getUserSubmittedFormsById;
exports.getHoursFromDateFilters = getHoursFromDateFilters;
exports.getFormTemplates = getFormTemplates;
exports.getFormtemplateCategories = getFormtemplateCategories;

