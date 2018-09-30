exports.seed = function(knex, Promise) {
  return knex('form_templates').del()
    .then(function () {
      return Promise.all([
        knex('form_templates').insert({type: 'Fall Protection', form_category_id: 1, company_id: 1, date_created: new Date('Thu Feb 08 2018 13:31:47 GMT-0800 (PST)').toISOString(), date_updated: new Date('Mon Oct 15 2018 11:45:59 GMT-0700 (PDT)').toISOString()}),
        knex('form_templates').insert({type: 'Incident Report', form_category_id: 2, company_id: 1, date_created: new Date('Tue Jul 10 2018 23:21:57 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Mon Aug 26 2019 20:52:28 GMT-0700 (PDT)').toISOString()}),
        knex('form_templates').insert({type: 'Toolbox Meeting', form_category_id: 2, company_id: 1, date_created: new Date('Wed Aug 22 2018 07:15:05 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Sun Feb 17 2019 18:36:29 GMT-0800 (PST)').toISOString()}),
        knex('form_templates').insert({type: 'Closeout', form_category_id: 3, company_id: 1, date_created: new Date('Sun Dec 24 2017 11:40:34 GMT-0800 (PST)').toISOString(), date_updated: new Date('Sat Feb 02 2019 07:37:34 GMT-0800 (PST)').toISOString()}),
        knex('form_templates').insert({type: 'Time Sheet', form_category_id: 3, company_id: 1, date_created: new Date('Wed Jun 27 2018 18:49:18 GMT-0700 (PDT)').toISOString(), date_updated: new Date('Wed Aug 21 2019 23:16:47 GMT-0700 (PDT)').toISOString()})
      ]);
  });
};