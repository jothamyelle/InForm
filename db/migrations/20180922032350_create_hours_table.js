exports.up = function(knex, Promise) {
  return knex.schema.createTable('hours', function (table) {
    table.increments();
    table.integer('user_id').references('users.id');
    table.integer('minutes_worked');
    table.datetime('date_worked');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hours');
};