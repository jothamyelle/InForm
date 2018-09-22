const express = require('express');
const jobsRouter = new express.Router();

module.exports = (knex) => {
	jobsRouter.get('/jobs', (req, res) => {
			
	})

	jobsRouter.get('/jobs:id', (req, res) => {
			
	})

	jobsRouter.post('/jobs', (req, res) => {
			
	})

	jobsRouter.post('/jobs:id', (req, res) => {
			
	})
	return jobsRouter
}
