exports.seed = function(knex, Promise) {
  return knex('submitted_form_fields').del()
    .then(function () {
      return Promise.all([
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 1, date_created: new Date("Tue Dec 19 2017 12:25:45 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:56:05 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 2, date_created: new Date("Tue Jul 03 2018 08:11:52 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 15:47:02 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 3, date_created: new Date("Tue Oct 24 2017 00:37:14 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 09:57:42 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 4, date_created: new Date("Tue Nov 07 2017 00:27:50 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:26:47 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 5, date_created: new Date("Wed May 30 2018 23:42:05 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 10:19:34 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 6, date_created: new Date("Wed Sep 12 2018 07:32:50 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 13:51:09 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 7, date_created: new Date("Sat Jan 13 2018 19:47:54 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:54:05 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 8, date_created: new Date("Wed Aug 15 2018 13:32:59 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 18:09:30 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 9, date_created: new Date("Wed Jun 20 2018 01:55:24 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 05:51:30 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 10, date_created: new Date("Mon Jan 15 2018 20:54:12 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 16:30:49 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 11, date_created: new Date("Mon Dec 25 2017 21:05:07 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 07:33:09 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 1, submitted_field_id: 12, date_created: new Date("Sat Feb 10 2018 09:28:30 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 09:13:10 GMT-0700 (PDT)").toISOString()}),
        
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 1, date_created: new Date("Tue Dec 19 2017 12:25:45 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:56:05 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 2, date_created: new Date("Tue Jul 03 2018 08:11:52 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 15:47:02 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 3, date_created: new Date("Tue Oct 24 2017 00:37:14 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 09:57:42 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 4, date_created: new Date("Tue Nov 07 2017 00:27:50 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:26:47 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 5, date_created: new Date("Wed May 30 2018 23:42:05 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 10:19:34 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 6, date_created: new Date("Wed Sep 12 2018 07:32:50 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 13:51:09 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 7, date_created: new Date("Sat Jan 13 2018 19:47:54 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 08:54:05 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 8, date_created: new Date("Wed Aug 15 2018 13:32:59 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 18:09:30 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 9, date_created: new Date("Wed Jun 20 2018 01:55:24 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 05:51:30 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 10, date_created: new Date("Mon Jan 15 2018 20:54:12 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 16:30:49 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 11, date_created: new Date("Mon Dec 25 2017 21:05:07 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 07:33:09 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_form_fields').insert({submitted_form_id: 2, submitted_field_id: 12, date_created: new Date("Sat Feb 10 2018 09:28:30 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 09:13:10 GMT-0700 (PDT)").toISOString()}),
      ]);

    }
  )
}
