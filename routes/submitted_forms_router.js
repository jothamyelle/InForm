const express = require('express');
const submittedFormsRouter = new express.Router();

module.exports = (knex) => {
	submittedFormsRouter.get('/submitted_forms', (req, res) => {
			
	})

	submittedFormsRouter.get('/submitted_forms:id', (req, res) => {
			
	})

	submittedFormsRouter.post('/submitted_forms', (req, res) => {
			
	})

	submittedFormsRouter.post('/submitted_forms:id', (req, res) => {
			
	});
	
	return submittedFormsRouter
}
