exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('template_fields').del()
      .then(function () {
        // Inserts seed entries
        return knex('template_fields').insert([
            {label: 'Name', type:'text', maxlength: 1000, required: true, placeholder: 'John Doe', multiple: false, date_created: 'Mon May 14 2018 21:33:01 GMT-0700 (PDT)', date_updated: 'Sat Sep 22 2018 03:10:01 GMT-0700 (PDT)' },
            {label: 'Date', type:'date', maxlength: 1000, required: false, placeholder: '', multiple: true, date_created: 'Mon Jul 30 2018 07:34:56 GMT-0700 (PDT)', date_updated: 'Fri Sep 21 2018 18:30:42 GMT-0700 (PDT)' },
            {label: 'Description', type:'textarea', maxlength: 1000, required: false, placeholder: 'This is a description...', multiple: false, date_created: 'Wed Oct 25 2017 08:48:27 GMT-0700 (PDT)', date_updated: 'Fri Sep 21 2018 23:27:56 GMT-0700 (PDT)' },
            {label: 'Hazards', type:'select', options: {options: ["Earth", "Wind", "Fire"]}, maxlength: 1000, required: false, placeholder: '', multiple: true, date_created: 'Wed Oct 25 2017 09:22:31 GMT-0700 (PDT)', date_updated: 'Fri Sep 21 2018 17:50:08 GMT-0700 (PDT)' },
            {label: 'Precautions Taken?', type:'radio', options: {options: ["yes", "no"]}, maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Sun Oct 22 2017 13:47:55 GMT-0700 (PDT)', date_updated: 'Sat Sep 22 2018 08:23:36 GMT-0700 (PDT)' },
            {label: 'Enter a number', type:'number', maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Tue Dec 05 2017 23:05:44 GMT-0800 (PST)', date_updated: 'Fri Sep 21 2018 21:41:08 GMT-0700 (PDT)' },
            {label: 'Pick one', type:'select', options: {options: ["first", "second", "third", "fourth", "fifth"]}, maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Wed Sep 05 2018 11:49:24 GMT-0700 (PDT)', date_updated: 'Sat Sep 22 2018 02:34:40 GMT-0700 (PDT)' },
            {label: 'Checkbox options', type:'checkbox', options:{options: ["one", "two", "three", "four", "five"]}, maxlength: 1000, required: false, placeholder: '', multiple: true, date_created: 'Tue Mar 06 2018 09:22:48 GMT-0800 (PST)', date_updated: 'Fri Sep 21 2018 14:48:06 GMT-0700 (PDT)' },
            {label: "Date and Time", type:'datetime', maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Mon Sep 17 2018 18:16:22 GMT-0700 (PDT)', date_updated: 'Fri Sep 21 2018 13:26:06 GMT-0700 (PDT)' },
            {label: 'Upload a File', type:'file', maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Thu Dec 28 2017 21:10:36 GMT-0800 (PST)', date_updated: 'Sat Sep 22 2018 09:12:25 GMT-0700 (PDT)' },
            {label: 'Enter an email', type:'email', maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Mon Sep 17 2018 18:16:22 GMT-0700 (PDT)', date_updated: 'Sat Sep 22 2018 07:47:08 GMT-0700 (PDT)' },
            {label: "What's the time", type:'time', maxlength: 1000, required: false, placeholder: '', multiple: false, date_created: 'Wed Nov 15 2017 04:59:47 GMT-0800 (PST)', date_updated: 'Fri Sep 21 2018 14:11:58 GMT-0700 (PDT)' }
        ]);
      });
  };