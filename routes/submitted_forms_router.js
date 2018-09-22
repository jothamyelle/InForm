// Require Express and set router

const express = require('express');
const submittedFormsRouter = new express.Router();

submittedFormsRouter
	.get('/submitted_forms', (req, res) => {
			
	})

	.get('/submitted_forms:id', (req, res) => {
			
	})

	.post('/submitted_forms', (req, res) => {
			
	})

	.post('/submitted_forms:id', (req, res) => {
			
	});

module.exports = submittedFormsRouter;