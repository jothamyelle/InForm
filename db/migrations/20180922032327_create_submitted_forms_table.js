exports.up = function(knex, Promise) {
  return knex.schema.createTable('submitted_forms', function (table) {
    table.increments();
    table.integer('form_template_id').references('form_templates.id').onDelete("CASCADE");;
    table.integer('user_id').references('users.id');
    table.integer('job_id').references('jobs.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submitted_forms');
};