exports.up = function(knex, Promise) {
  return knex.schema.createTable('submitted_fields', function (table) {
    table.increments();
    table.json('value').nullable();
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submitted_fields');
};