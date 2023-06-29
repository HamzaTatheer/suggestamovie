exports.up = function(knex) {
    return knex.schema.alterTable('posts', function(table) {
      table.string('posted_by');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('posts', function(table) {
      table.dropColumn('posted_by');
    });
  };
  