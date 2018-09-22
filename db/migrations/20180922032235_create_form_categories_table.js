exports.up = function(knex, Promise) {
  return knex.schema.createTable('form_categories', function (table) {
    table.increments();
    table.string('name');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('form_categories');
};