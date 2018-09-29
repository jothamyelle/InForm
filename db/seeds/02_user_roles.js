exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_roles').insert([
        {
          role: "General Manager",
          date_created: new Date("Wed Jun 06 2018 08:46:15 GMT-0700 (PDT)").toISOString(),
          date_updated: new Date("Thu Sep 19 2019 14:50:37 GMT-0700 (PDT)").toISOString()
        },
        {
          role: "Foreman",
          date_created: new Date("Fri Jul 13 2018 00:33:23 GMT-0700 (PDT)").toISOString(),
          date_updated: new Date("Sun Mar 24 2019 22:15:08 GMT-0700 (PDT)").toISOString()
        },
        {
          role: "Labourer",
          date_created: new Date("Sat Dec 02 2017 14:13:34 GMT-0800 (PST)").toISOString(),
          date_updated: new Date("Sun Sep 01 2019 10:15:43 GMT-0700 (PDT)").toISOString()
        }
      ]);
    });
};
