exports.seed = function(knex, Promise) {
  return knex('form_template_fields').del()
    .then(function () {
      return Promise.all([
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 1, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 2, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 3, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 4, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 5, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 6, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 7, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 8, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 9, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 10, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 11, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 12, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 1, template_field_id: 13, date_created: new Date('Mon Jul 09 2018 01:48:18 GMT-0700 (PDT)'), date_updated: new Date('Sat Aug 10 2019 06:33:22 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 1, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 2, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 3, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 4, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 5, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 6, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 7, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 8, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 9, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 10, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 11, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 12, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 2, template_field_id: 13, date_created: new Date('Wed Dec 06 2017 14:37:48 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 16 2019 08:04:29 GMT-0800 (PST)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 1, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 2, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 3, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 4, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 5, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 6, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 7, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 8, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 9, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 10, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 11, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 12, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')}),
        knex('form_template_fields').insert({form_template_id: 3, template_field_id: 13, date_created: new Date('Tue Dec 05 2017 13:58:22 GMT-0800 (PST)'), date_updated: new Date('Thu Apr 25 2019 11:15:26 GMT-0700 (PDT)')})
      ]);
    });
  };