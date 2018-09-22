exports.seed = function(knex, Promise) {
  return knex('submitted_fields').del()
    .then(function () {
      return Promise.all([
        knex('submitted_fields').insert({value: {values: "June Goyette"}, date_created: new Date("Tue Nov 07 2017 19:54:47 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 02:31:20 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Fri Sep 21 2018"}, date_created: new Date("Mon Dec 11 2017 03:03:16 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 20:19:57 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Numquam doloremque quo sit. Ea ab nobis corporis laborum omnis qui sed. Cumque magnam et provident. Tempore rerum deserunt incidunt architecto autem cupiditate culpa. Aut tenetur voluptatem sed porro."}, date_created: new Date("Tue Apr 24 2018 19:20:14 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 16:00:36 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["Wind", "Fire"]}, date_created: new Date("Sun Oct 01 2017 16:24:26 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 19:42:39 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["No"]}, date_created: new Date("Tue Jan 16 2018 09:01:25 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 10:07:04 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: 65702}, date_created: new Date("Sat Dec 02 2017 23:50:25 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 07:36:56 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["fourth"]}, date_created: new Date("Fri Sep 21 2018 01:36:27 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 20:49:28 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["two", "three"]}, date_created: new Date("Tue Sep 18 2018 09:26:15 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 21:14:20 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Sat Sep 22 2018 05:29:52"}, date_created: new Date("Wed Sep 19 2018 02:38:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 23:59:56 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "assets/images/001.png"}, date_created: new Date("Thu Oct 19 2017 15:55:17 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 01:28:50 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Madelynn.Corkery@yahoo.com"}, date_created: new Date("Mon Jan 29 2018 13:03:44 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 13:58:11 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "12:35:23"}, date_created: new Date("Sat May 12 2018 20:47:59 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 04:30:00 GMT-0700 (PDT)").toISOString()}),

        knex('submitted_fields').insert({value: {values: "Angela Kemmer"}, date_created: new Date("Tue Nov 07 2017 19:54:47 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 02:31:20 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Fri Sep 21 2018"}, date_created: new Date("Mon Dec 11 2017 03:03:16 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 20:19:57 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Sit veniam aut perspiciatis magnam eos aut et. Sit enim pariatur cum soluta quasi quam. Necessitatibus repellendus deserunt sit. Itaque repellendus nesciunt fuga repellendus quidem aliquam quidem ut."}, date_created: new Date("Tue Apr 24 2018 19:20:14 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 16:00:36 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["Wind"]}, date_created: new Date("Sun Oct 01 2017 16:24:26 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 19:42:39 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["Yes"]}, date_created: new Date("Sat Dec 02 2017 23:50:25 GMT-0800 (PST)").toISOString(), date_updated: new Date("Sat Sep 22 2018 07:36:56 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: 14364}, date_created: new Date("Fri Sep 21 2018 01:36:27 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 20:49:28 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["second"]}, date_created: new Date("Tue Sep 18 2018 09:26:15 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 21:14:20 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: ["one", "four"]}, date_created: new Date("Wed Sep 19 2018 02:38:39 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Fri Sep 21 2018 23:59:56 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Fri Mar 08 2019 23:26:16"}, date_created: new Date("Thu Oct 19 2017 15:55:17 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 01:28:50 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "assets/images/002.png"}, date_created: new Date("Sun Feb 18 2018 21:41:59 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 22:43:00 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "Luciano.Grimes27@gmail.com"}, date_created: new Date("Mon Jan 29 2018 13:03:44 GMT-0800 (PST)").toISOString(), date_updated: new Date("Fri Sep 21 2018 13:58:11 GMT-0700 (PDT)").toISOString()}),
        knex('submitted_fields').insert({value: {values: "02:15:29"}, date_created: new Date("Sat May 12 2018 20:47:59 GMT-0700 (PDT)").toISOString(), date_updated: new Date("Sat Sep 22 2018 04:30:00 GMT-0700 (PDT)").toISOString()}),
      ]);

    }
  )
}
