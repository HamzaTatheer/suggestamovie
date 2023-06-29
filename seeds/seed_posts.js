/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  return knex('posts').del()
    .then(function() {
      return knex('posts').insert([
        { title: 'Post 1', body: 'Body of post 1', posted_by: 'User 1' },
        { title: 'Post 2', body: 'Body of post 2', posted_by: 'User 2' },
        // Add more sample data as needed
      ]);
  });
};
