exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', function (table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('phone_number');
    table.string('email');
    table.boolean('active');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};