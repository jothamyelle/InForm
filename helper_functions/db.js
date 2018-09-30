const express = require('express');
const app = express();
const ENV = process.env.ENV || "development";

const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[ENV]);
const knexLogger = require('knex-logger');

app.use(knexLogger(knex));

exports = module.exports;

// Function to return all Jobs
function getJobs() {
  return knex.select().from('jobs')
  .then(function(rows) {
      // console.log('Knex job query', rows);
      return rows;
  });
}


// Function to return all users
function getUsers() {
  return knex.select().from('users')
  .then(function(rows) {
      // console.log('Knex employee query', rows);
      return rows;
  });
}

// Function to return a user given an ID
function getUserById(id) {
    return knex.select()
    .from('users')
    .where( {id: id} )
    .then(function(rows) {
        // console.log('Knex user profile query', rows);
        return rows;
    });
}

// Function to get a user role by its ID.
function getUserRoleById(id) {
  return knex.select()
    .from('user_roles')
    .where( {id: id} )
    .then(function(rows) {
        // console.log('Knex user role query', rows);
        return rows;
    });
}

// Function to return all user roles
function getUserRoles() {
  return knex.select().from('user_roles')
  .then(function(rows) {
      // console.log('Knex user roles query', rows);
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
				// console.log('Knex user role query', rows);
				return rows;
	})
}

function getSubmittedFormsByDate(date) {
  // console.log('DATE', date)
  return knex.select('submitted_forms.date_created', 'form_templates.type', 
  'jobs.name', 'jobs.active', 'submitted_forms.id AS formId', 'jobs.id AS jobId')
		.from('submitted_forms')
    .join('form_templates', {'form_templates.id':'submitted_forms.form_template_id'})
    .join('jobs', {'jobs.id': 'submitted_forms.job_id'})
		.where(knex.raw('??::date = ?', ['submitted_forms.date_created', date]))
		.then(function(rows) {
				// console.log('Knex submitted forms by day query', rows);
				return rows;
	});
}

// function to get hours worked and relevant user info given two date filter parameters
function getHoursFromDateFilters(date1, date2) {
  // console.log(date1, date2)
	return knex.select('hours.minutes_worked', 'users.first_name', 'users.last_name', 'users.id')
		.from('hours')
		.join('users', {'users.id':'hours.user_id'})
		.whereBetween('date_worked', [date1, date2])
		.then(function(rows) {
				// console.log('Knex employee minutes worked query', rows);
				return rows;
	});
}

function getFormtemplateCategories() {
	return knex.select().from('form_categories')
  .then(function(rows) {
      // console.log('Knex form template categories query', rows);
      return rows;
  });
}

function getFormTemplates() {
	return knex.select().from('form_templates')
  .then(function(rows) {
      // console.log('Knex form templates query', rows);
      return rows;
  });
}

function getFormSubmissions() {
  return knex.select('submitted_forms.id', 'submitted_forms.date_created', 'submitted_forms.date_updated', 'users.id', 'users.first_name', 'users.last_name', 'form_templates.type', 'jobs.name as job_name')
  .from('submitted_forms')
  .join('jobs', { 'jobs.id':'submitted_forms.job_id' })
  .join('users', {'users.id':'submitted_forms.user_id' })
  .join('form_templates', {'form_templates.id': 'submitted_forms.form_template_id'})
  .then(function(rows) {
    // console.log('Knex form submissions query', rows);
    return rows;
  });
}

function getFormSubmissionsByDate(date) {
  return knex.select('submitted_forms.id', 'submitted_forms.date_created', 'submitted_forms.date_updated', 'users.id as user_id', 'users.first_name', 'users.last_name', 'form_templates.type', 'jobs.name as job_name')
  .from('submitted_forms')
  .join('jobs', { 'jobs.id':'submitted_forms.job_id' })
  .join('users', {'users.id':'submitted_forms.user_id' })
  .join('form_templates', {'form_templates.id': 'submitted_forms.form_template_id'})
  .where(knex.raw('??::date = ?', ['submitted_forms.date_created', date]))
  .then(function(rows) {
    // console.log('Knex form submissions date query', rows);
    return rows;
  });
}

function getFormSubmissionsFromLastWeek(date1, date2) {
  // console.log('knex query last week', date1, date2)
  return knex.select('submitted_forms.id', 'submitted_forms.date_created', 'submitted_forms.date_updated', 'users.id as user_id', 'users.first_name', 'users.last_name', 'form_templates.type', 'jobs.name as job_name')
  .from('submitted_forms')
  .join('jobs', { 'jobs.id':'submitted_forms.job_id' })
  .join('users', {'users.id':'submitted_forms.user_id' })
  .join('form_templates', {'form_templates.id': 'submitted_forms.form_template_id'})
  .whereBetween('submitted_forms.date_created', [date1, date2])
  .orderBy('submitted_forms.date_created')
  .then(function(rows) {
    // console.log('Knex form submissions last week query', rows);
    return rows;
  });
}

function postFormTemplate(formBuilderContent, name, category ) {
  console.log(`Made it into the postFormTemplate, here's the content: name ${name}, category ${category}, formBuilderContent ${formBuilderContent['0'].type}`);
  
  knex.select('id')
    .from('form_categories')
    .where('name', category)
    .then((categoryId) =>     
      knex('form_templates')
        .insert({type: formBuilderContent['0'].type, form_category_id: categoryId[0].id, company_id: 1, date_created: new Date().toISOString(), date_updated: new Date().toISOString() })
        .returning('*')
        .then((formTemplate) => {
          //  formBuilderContent.forEach(field => {
             for (field in formBuilderContent) {
             knex('template_fields')
              .insert({
                label: formBuilderContent[field].label, 
                type: formBuilderContent[field].type,
                options: JSON.stringify(formBuilderContent[field].controlOptions),
                maxlength: formBuilderContent[field].maxlength,
                required: formBuilderContent[field].required,
                placeholder: formBuilderContent[field].placeholder,
                multiple: formBuilderContent[field].multiple,
                date_created: new Date().toISOString(), 
                date_updated: new Date().toISOString()
              })
              .returning('*')
              .then(templateField => { 
                knex('form_template_fields')
                .insert({
                  form_template_id: formTemplate[0].id,
                  template_field_id: templateField[0].id,
                  date_created: new Date().toISOString(), 
                  date_updated: new Date().toISOString()
                })
                .returning('*')
                .then(res => {
                  console.log(res)
                })
              })
            }
          })
        )
      return Promise.resolve();
    }

exports.getJobs = getJobs;
exports.getUsers = getUsers;
exports.getUserRoles = getUserRoles;
exports.getUserById = getUserById;
exports.getUserRoleById = getUserRoleById;
exports.getUserSubmittedFormsById = getUserSubmittedFormsById;
exports.getHoursFromDateFilters = getHoursFromDateFilters;
exports.getSubmittedFormsByDate = getSubmittedFormsByDate;
exports.getFormSubmissions = getFormSubmissions;
exports.getFormTemplates = getFormTemplates;
exports.getFormtemplateCategories = getFormtemplateCategories;
exports.getFormSubmissionsByDate = getFormSubmissionsByDate;
exports.getFormSubmissionsFromLastWeek = getFormSubmissionsFromLastWeek;
exports.postFormTemplate = postFormTemplate;
