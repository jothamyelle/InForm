exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_roles').insert([
        {
          role: "Role of Executive",
          date_created: new Date("Wed Jun 06 2018 08:46:15 GMT-0700 (PDT)"),
          date_updated: new Date("Thu Sep 19 2019 14:50:37 GMT-0700 (PDT)")
        },
        {
          role: "Role of Rustic Plastic Chicken",
          date_created: new Date("Fri Jul 13 2018 00:33:23 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Mar 24 2019 22:15:08 GMT-0700 (PDT)")
        },
        {
          role: "Role of Handmade",
          date_created: new Date("Sat Dec 02 2017 14:13:34 GMT-0800 (PST)"),
          date_updated: new Date("Sun Sep 01 2019 10:15:43 GMT-0700 (PDT)")
        },
        {
          role: "Role of Mountain",
          date_created: new Date("Thu Nov 16 2017 13:52:12 GMT-0800 (PST)"),
          date_updated: new Date("Thu Jul 11 2019 22:46:41 GMT-0700 (PDT)")
        },
        {
          role: "Role of Ohio",
          date_created: new Date("Sun Sep 02 2018 13:37:22 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Dec 09 2018 02:16:33 GMT-0800 (PST)")
        },
        {
          role: "Role of Delaware",
          date_created: new Date("Wed May 23 2018 09:19:28 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Aug 11 2019 14:42:21 GMT-0700 (PDT)")
        },
        {
          role: "Role of JBOD",
          date_created: new Date("Sun Dec 03 2017 16:01:19 GMT-0800 (PST)"),
          date_updated: new Date("Fri Jan 18 2019 01:00:35 GMT-0800 (PST)")
        },
        {
          role: "Role of invoice",
          date_created: new Date("Mon Apr 23 2018 16:08:21 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Aug 04 2019 11:39:01 GMT-0700 (PDT)")
        },
        {
          role: "Role of Sausages",
          date_created: new Date("Sat Sep 08 2018 15:27:41 GMT-0700 (PDT)"),
          date_updated: new Date("Tue Nov 20 2018 09:10:57 GMT-0800 (PST)")
        },
        {
          role: "Role of Tuna",
          date_created: new Date("Thu Jan 18 2018 14:30:23 GMT-0800 (PST)"),
          date_updated: new Date("Sun Jul 14 2019 19:21:06 GMT-0700 (PDT)")
        },
        {
          role: "Role of TCP",
          date_created: new Date("Wed Oct 11 2017 15:29:33 GMT-0700 (PDT)"),
          date_updated: new Date("Tue Jun 04 2019 12:39:11 GMT-0700 (PDT)")
        },
        {
          role: "Role of XML",
          date_created: new Date("Fri Jan 19 2018 06:20:21 GMT-0800 (PST)"),
          date_updated: new Date("Sat Nov 24 2018 12:24:46 GMT-0800 (PST)")
        },
        {
          role: "Role of killer",
          date_created: new Date("Fri May 25 2018 20:41:01 GMT-0700 (PDT)"),
          date_updated: new Date("Fri Dec 14 2018 04:13:39 GMT-0800 (PST)")
        },
        {
          role: "Role of alliance",
          date_created: new Date("Mon Oct 23 2017 21:09:34 GMT-0700 (PDT)"),
          date_updated: new Date("Thu Feb 14 2019 04:02:21 GMT-0800 (PST)")
        },
        {
          role: "Role of input",
          date_created: new Date("Sat Jan 27 2018 10:45:03 GMT-0800 (PST)"),
          date_updated: new Date("Mon Apr 22 2019 16:03:17 GMT-0700 (PDT)")
        },
        {
          role: "Role of Concrete",
          date_created: new Date("Sat Jun 02 2018 05:17:57 GMT-0700 (PDT)"),
          date_updated: new Date("Wed Mar 20 2019 00:35:01 GMT-0700 (PDT)")
        },
        {
          role: "Role of vertical",
          date_created: new Date("Sun Mar 18 2018 06:34:15 GMT-0700 (PDT)"),
          date_updated: new Date("Wed Aug 28 2019 06:35:39 GMT-0700 (PDT)")
        },
        {
          role: "Role of Industrial",
          date_created: new Date("Tue Jun 12 2018 08:50:30 GMT-0700 (PDT)"),
          date_updated: new Date("Fri Jul 05 2019 04:33:31 GMT-0700 (PDT)")
        },
        {
          role: "Role of Gorgeous Concrete Chips",
          date_created: new Date("Wed Jun 20 2018 16:10:31 GMT-0700 (PDT)"),
          date_updated: new Date("Sat May 11 2019 07:18:52 GMT-0700 (PDT)")
        },
        {
          role: "Role of feed",
          date_created: new Date("Mon Jul 23 2018 10:26:23 GMT-0700 (PDT)"),
          date_updated: new Date("Tue May 14 2019 16:13:06 GMT-0700 (PDT)")
        }
      ]);
    });
};
