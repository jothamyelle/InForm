exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_fields', function (table) {
    table.increments();
    table.string('label');
    table.string('type');
    table.json('options').nullable();
    table.integer('maxlength');
    table.boolean('required');
    table.string('placeholder');
    table.boolean('multiple');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_fields');
};