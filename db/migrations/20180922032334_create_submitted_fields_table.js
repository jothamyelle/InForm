exports.up = function(knex, Promise) {
  return knex.schema.createTable('submitted_fields', function (table) {
    table.increments();
    table.json('value').nullable();
    table.integer('submitted_form_id').references('submitted_forms.id');
    table.integer('template_field_id').references('template_fields.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('submitted_fields');
};