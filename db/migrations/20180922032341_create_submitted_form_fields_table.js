exports.up = function(knex, Promise) {
  return knex.schema.createTable('submitted_form_fields', function (table) {
    table.increments();
    table.integer('submitted_form_id').references('submitted_forms.id');
    table.integer('submitted_field_id').references('submitted_fields.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submitted_form_fields');
};