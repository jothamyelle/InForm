exports.seed = function(knex, Promise) {
  return knex('submitted_forms').del()
    .then(function () {
      return Promise.all([
        knex('submitted_forms').insert({form_template_id: 1, user_id: 1, job_id: 1, date_created: new Date('Fri Apr 27 2018 13:57:51 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Mon Jan 28 2019 01:01:14 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 2, user_id: 2, job_id: 1, date_created: new Date('Thu Jan 04 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Fri Jan 25 2019 20:20:45 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 1, job_id: 1, date_created: new Date('Tue Sep 22 2018 13:57:51 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Tue Sep 22 2018 13:57:51 GMT-0700 (PDT)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 2, user_id: 1, job_id: 1, date_created: new Date('Tue Sep 23 2018 13:57:51 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Tue Sep 23 2018 13:57:51 GMT-0700 (PDT)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 24 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 24 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 25 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 25 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 26 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 26 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 27 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 27 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 28 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 28 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 29 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 29 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
        knex('submitted_forms').insert({form_template_id: 1, user_id: 2, job_id: 2, date_created: new Date('Tue Sep 30 2018 08:34:03 GMT-0800 (PST)').toISOString(), date_updated: new Date('Tue Sep 30 2018 08:34:03 GMT-0800 (PST)').toISOString() }),
      ]);
    });
  };