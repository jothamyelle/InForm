exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_roles', function (table) {
    table.increments();
    table.string('role');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_roles');
};