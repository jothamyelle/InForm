exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('phone_number');
    table.string('email');
    table.string('password_digest');
    table.string('address');
    table.string('image_url');
    table.integer('role_id').references('user_roles.id').onDelete("CASCADE");
    table.integer('company_id').references('companies.id').onDelete("CASCADE");
    table.boolean('active');
    table.datetime('date_created');
    table.datetime('date_updated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};