exports.seed = function(knex, Promise) {
  return knex('form_templates').del()
    .then(function () {
      return Promise.all([
        knex('form_templates').insert({type: 'accusantium dicta', form_category_id: 1, company_id: 1, date_created: new Date('Thu Feb 08 2018 13:31:47 GMT-0800 (PST)'), date_updated: new Date('Mon Oct 15 2018 11:45:59 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'ratione debitis', form_category_id: 1, company_id: 2, date_created: new Date('Tue Jul 10 2018 23:21:57 GMT-0700 (PDT)'), date_updated: new Date('Mon Aug 26 2019 20:52:28 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'voluptates accusantium', form_category_id: 1, company_id: 3, date_created: new Date('Wed Aug 22 2018 07:15:05 GMT-0700 (PDT)'), date_updated: new Date('Sun Feb 17 2019 18:36:29 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'totam assumenda', form_category_id: 1, company_id: 4, date_created: new Date('Sun Dec 24 2017 11:40:34 GMT-0800 (PST)'), date_updated: new Date('Sat Feb 02 2019 07:37:34 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'libero aut', form_category_id: 1, company_id: 5, date_created: new Date('Wed Jun 27 2018 18:49:18 GMT-0700 (PDT)'), date_updated: new Date('Wed Aug 21 2019 23:16:47 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'fugit eum', form_category_id: 1, company_id: 6, date_created: new Date('Sat May 19 2018 18:40:29 GMT-0700 (PDT)'), date_updated: new Date('Mon Feb 11 2019 12:37:01 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'sed voluptas', form_category_id: 2, company_id: 7, date_created: new Date('Sun Mar 25 2018 02:45:22 GMT-0700 (PDT)'), date_updated: new Date('Sun Feb 17 2019 07:51:09 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'culpa consequuntur', form_category_id: 2, company_id: 8, date_created: new Date('Mon Aug 20 2018 05:06:36 GMT-0700 (PDT)'), date_updated: new Date('Sat Jan 19 2019 02:56:51 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'ad facilis', form_category_id: 2, company_id: 9, date_created: new Date('Sun Jul 15 2018 11:47:06 GMT-0700 (PDT)'), date_updated: new Date('Mon Nov 05 2018 03:02:49 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'non magnam', form_category_id: 2, company_id: 10, date_created: new Date('Wed Dec 13 2017 03:45:28 GMT-0800 (PST)'), date_updated: new Date('Mon Jan 21 2019 16:39:10 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'est non', form_category_id: 2, company_id: 11, date_created: new Date('Thu Mar 08 2018 09:35:17 GMT-0800 (PST)'), date_updated: new Date('Thu May 09 2019 15:55:16 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'nostrum reprehenderit', form_category_id: 2, company_id: 12, date_created: new Date('Wed Aug 15 2018 01:08:48 GMT-0700 (PDT)'), date_updated: new Date('Wed Apr 10 2019 22:02:36 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'ea aliquam', form_category_id: 2, company_id: 13, date_created: new Date('Wed Jul 11 2018 19:33:02 GMT-0700 (PDT)'), date_updated: new Date('Mon Jan 28 2019 23:02:27 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'numquam et', form_category_id: 3, company_id: 14, date_created: new Date('Sat Nov 04 2017 16:00:50 GMT-0700 (PDT)'), date_updated: new Date('Fri Nov 09 2018 04:54:51 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'tempore rerum', form_category_id: 3, company_id: 15, date_created: new Date('Sat Apr 28 2018 18:23:33 GMT-0700 (PDT)'), date_updated: new Date('Sat Apr 27 2019 12:36:10 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'autem porro', form_category_id: 3, company_id: 16, date_created: new Date('Thu Nov 30 2017 12:46:49 GMT-0800 (PST)'), date_updated: new Date('Fri Mar 22 2019 16:45:18 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'consectetur qui', form_category_id: 3, company_id: 17, date_created: new Date('Thu Jul 19 2018 21:14:38 GMT-0700 (PDT)'), date_updated: new Date('Tue Jan 29 2019 21:07:45 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'repudiandae et', form_category_id: 3, company_id: 18, date_created: new Date('Mon Apr 30 2018 05:28:35 GMT-0700 (PDT)'), date_updated: new Date('Wed Oct 03 2018 21:14:21 GMT-0700 (PDT)')}),
        knex('form_templates').insert({type: 'aperiam odit', form_category_id: 3, company_id: 19, date_created: new Date('Thu Oct 05 2017 18:27:41 GMT-0700 (PDT)'), date_updated: new Date('Sun Nov 18 2018 11:02:55 GMT-0800 (PST)')}),
        knex('form_templates').insert({type: 'non earum', form_category_id: 3, company_id: 20, date_created: new Date('Tue Apr 24 2018 20:26:25 GMT-0700 (PDT)'), date_updated: new Date('Sat Dec 08 2018 16:09:12 GMT-0800 (PST)')})
      ]);
  });
};