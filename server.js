require('dotenv').config();
const express         = require('express');
const ENV             = process.env.ENV || 'development';
const knexConfig      = require("./knexfile");
const knex            = require("knex")(knexConfig[ENV]);
const knexLogger      = require('knex-logger');
const app             = express();

const PORT            = process.env.PORT || 3005;
const bodyParser      = require('body-parser');
const cookieSession   = require('cookie-session');

app.use(knexLogger(knex));

// Seperated Routes for each Resource
const companiesRoutes = require("./routes/companies_router");
const formCategoriesRoutes = require("./routes/form_categories_router");
const jobsRoutes = require("./routes/jobs_router");
const submittedFormsRoutes = require("./routes/submitted_forms_router");
const templatesRoutes = require("./routes/templates_router");
const userRolesRoutes = require("./routes/user_roles_router");
const usersRoutes = require("./routes/users_router");

// Mount all resource routes
app.use("/companies", companiesRoutes(knex));
app.use("/form_categories", formCategoriesRoutes(knex));
app.use("/jobs", jobsRoutes(knex));
app.use("/submitted_forms", submittedFormsRoutes(knex));
app.use("/templates", templatesRoutes(knex));
app.use("/user_roles", userRolesRoutes(knex));
app.use("/users", usersRoutes(knex));

app.get("/poop", (req, res) => {
  res.send({express: 'Hello from Express'});
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
