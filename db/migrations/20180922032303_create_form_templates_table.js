exports.up = function(knex, Promise) {
  return knex.schema.createTable('form_templates', function (table) {
    table.increments();
    table.string('type');
    table.integer('form_category_id').references('form_categories.id');
    table.integer('company_id').references('companies.id');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('form_templates');
};