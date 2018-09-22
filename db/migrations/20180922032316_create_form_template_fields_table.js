exports.up = function(knex, Promise) {
  return knex.schema.createTable('form_template_fields', function (table) {
    table.increments();
    table.integer('form_template_id').references('form_templates.id');
    table.integer('template_field_id').references('template_fields.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('form_template_fields');
};