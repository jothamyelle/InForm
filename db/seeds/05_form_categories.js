exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('form_categories').del()
      .then(function () {
        // Inserts seed entries
        return knex('form_categories').insert([
            {name: 'Start of Shift', date_created: new Date("Wed Jan 31 2018 21:40:19 GMT-0800 (PST)"), date_updated: new Date("Fri Sep 21 2018 21:32:13 GMT-0700 (PDT)")},
            {name: 'Mid Shift', date_created: new Date("Wed Apr 25 2018 18:07:42 GMT-0700 (PDT)"), date_updated: new Date("Sat Sep 22 2018 04:25:58 GMT-0700 (PDT)")},
            {name: 'End of Shift', date_created: new Date("Sun Aug 12 2018 23:44:43 GMT-0700 (PDT)"), date_updated: new Date("Fri Sep 21 2018 20:55:18 GMT-0700 (PDT)")}
        ]);
      });
  };