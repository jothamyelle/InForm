exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function (table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.integer('job_number');
    table.string('email');
    table.boolean('active');
    table.integer('company_id').references('companies.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs');
};