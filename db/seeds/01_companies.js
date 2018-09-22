exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: "The natus numquam Company" , 
          address: "76950 Louie Place",
          phone_number: "6554440175",
          email: "Jedediah88@yahoo.com",
          active: true,
          date_created: new Date("Mon Dec 25 2017 14:16:44 GMT-0800 (PST)"),
          date_updated: new Date("Sat Jun 29 2019 10:19:55 GMT-0700 (PDT)")
        },
        {
          name: "The cumque dolorum Company" , 
          address: "556 Katarina Mill",
          phone_number: "4166215852",
          email: "Elroy.Jacobi24@yahoo.com",
          active: true,
          date_created: new Date("Tue Apr 03 2018 11:03:30 GMT-0700 (PDT)"),
          date_updated: new Date("Wed Apr 24 2019 12:56:47 GMT-0700 (PDT)")
        },
        {
          name: "The sed sint Company" , 
          address: "66726 Bins Creek",
          phone_number: "6812370615",
          email: "Rosella.Goldner72@hotmail.com",
          active: true,
          date_created: new Date("Fri Aug 03 2018 20:09:49 GMT-0700 (PDT)"),
          date_updated: new Date("Wed Feb 20 2019 15:14:56 GMT-0800 (PST)")
        },
        {
          name: "The ut et Company" , 
          address: "4204 Lueilwitz Highway",
          phone_number: "9437414490",
          email: "Berneice61@gmail.com",
          active: true,
          date_created: new Date("Thu Sep 28 2017 14:46:07 GMT-0700 (PDT)"),
          date_updated: new Date("Thu Jun 13 2019 06:12:13 GMT-0700 (PDT)")
        },
        {
          name: "The accusamus alias Company" , 
          address: "6171 Stroman Shore",
          phone_number: "5850938501",
          email: "Perry74@hotmail.com",
          active: true,
          date_created: new Date("Sat Mar 10 2018 01:41:25 GMT-0800 (PST)"),
          date_updated: new Date("Sat Aug 31 2019 09:28:15 GMT-0700 (PDT)")
        },
        {
          name: "The atque itaque Company" , 
          address: "2991 Kianna Ways",
          phone_number: "0455305054",
          email: "Jaeden_Bogisich37@gmail.com",
          active: true,
          date_created: new Date("Wed Feb 28 2018 03:14:09 GMT-0800 (PST)"),
          date_updated: new Date("Mon Nov 05 2018 13:25:25 GMT-0800 (PST)")
        },
        {
          name: "The et voluptates Company" , 
          address: "4886 Morar Hollow",
          phone_number: "5559956681",
          email: "Tyra53@yahoo.com",
          active: true,
          date_created: new Date("Fri Jul 06 2018 06:57:40 GMT-0700 (PDT)"),
          date_updated: new Date("Fri Jan 18 2019 08:59:33 GMT-0800 (PST)")
        },
        {
          name: "The vel non Company" , 
          address: "813 Bauch Route",
          phone_number: "3179568405",
          email: "Clarissa28@gmail.com",
          active: true,
          date_created: new Date("Mon Feb 12 2018 17:15:55 GMT-0800 (PST)"),
          date_updated: new Date("Sat Feb 09 2019 11:59:33 GMT-0800 (PST)")
        },
        {
          name: "The velit ratione Company" , 
          address: "395 Okuneva Dam",
          phone_number: "7217512230",
          email: "Fay_Paucek@yahoo.com",
          active: true,
          date_created: new Date("Fri Jan 19 2018 00:05:56 GMT-0800 (PST)"),
          date_updated: new Date("Tue Apr 02 2019 10:12:51 GMT-0700 (PDT)")
        },
        {
          name: "The veritatis ducimus Company" , 
          address: "97287 Reichel Centers",
          phone_number: "3489176035",
          email: "Murphy.Johns@gmail.com",
          active: true,
          date_created: new Date("Sun Jan 28 2018 01:16:59 GMT-0800 (PST)"),
          date_updated: new Date("Sun Feb 17 2019 03:00:46 GMT-0800 (PST)")
        },
        {
          name: "The libero unde Company" , 
          address: "199 Price Mount",
          phone_number: "8800038250",
          email: "Edwin.Davis@hotmail.com",
          active: true,
          date_created: new Date("Fri Mar 09 2018 09:38:31 GMT-0800 (PST)"),
          date_updated: new Date("Tue Feb 26 2019 01:18:00 GMT-0800 (PST)")
        },
        {
          name: "The maiores ut Company" , 
          address: "0519 Gage Mountains",
          phone_number: "8320796321",
          email: "Edward_Homenick@gmail.com",
          active: true,
          date_created: new Date("Fri Dec 01 2017 05:18:50 GMT-0800 (PST)"),
          date_updated: new Date("Fri Sep 06 2019 12:42:58 GMT-0700 (PDT)")
        },
        {
          name: "The aut quia Company" , 
          address: "08157 Irving Mountains",
          phone_number: "2633440874",
          email: "Chadrick.West@gmail.com",
          active: true,
          date_created: new Date("Mon Jun 11 2018 05:18:08 GMT-0700 (PDT)"),
          date_updated: new Date("Sat Jul 20 2019 10:35:43 GMT-0700 (PDT)")
        },
        {
          name: "The optio et Company" , 
          address: "9408 Larue Path",
          phone_number: "7231947165",
          email: "Vinnie.Keeling@gmail.com",
          active: true,
          date_created: new Date("Tue Jan 16 2018 13:57:59 GMT-0800 (PST)"),
          date_updated: new Date("Thu May 02 2019 04:31:52 GMT-0700 (PDT)")
        },
        {
          name: "The amet ea Company" , 
          address: "24962 Derek Extensions",
          phone_number: "6164538549",
          email: "Richmond78@gmail.com",
          active: true,
          date_created: new Date("Fri Mar 09 2018 05:28:23 GMT-0800 (PST)"),
          date_updated: new Date("Tue Dec 04 2018 18:13:21 GMT-0800 (PST)")
        },
        {
          name: "The qui velit Company" , 
          address: "618 Durgan Extension",
          phone_number: "0197872693",
          email: "Savion_Kozey@gmail.com",
          active: true,
          date_created: new Date("Fri Jun 22 2018 09:22:35 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Jan 20 2019 23:18:26 GMT-0800 (PST)")
        },
        {
          name: "The ut et Company" , 
          address: "9358 Talia Place",
          phone_number: "7942807731",
          email: "Kaden49@hotmail.com",
          active: true,
          date_created: new Date("Tue Oct 10 2017 03:50:35 GMT-0700 (PDT)"),
          date_updated: new Date("Wed Oct 10 2018 22:06:44 GMT-0700 (PDT)")
        },
        {
          name: "The doloremque quia Company" , 
          address: "8084 Zita Village",
          phone_number: "9101990583",
          email: "Daphney0@gmail.com",
          active: true,
          date_created: new Date("Fri Nov 10 2017 15:09:22 GMT-0800 (PST)"),
          date_updated: new Date("Sun Sep 08 2019 06:13:11 GMT-0700 (PDT)")
        },
        {
          name: "The nemo ut Company" , 
          address: "15569 Bernhard Ramp",
          phone_number: "4377223145",
          email: "Jovany56@gmail.com",
          active: true,
          date_created: new Date("Fri Dec 15 2017 07:24:25 GMT-0800 (PST)"),
          date_updated: new Date("Mon May 27 2019 00:44:11 GMT-0700 (PDT)")
        },
        {
          name: "The aut ipsum Company" , 
          address: "579 Wilderman Light",
          phone_number: "7589026271",
          email: "Faye13@hotmail.com",
          active: true,
          date_created: new Date("Sun May 06 2018 08:29:41 GMT-0700 (PDT)"),
          date_updated: new Date("Sun Jun 16 2019 10:35:13 GMT-0700 (PDT)")
        }
      ]);
    });
};
