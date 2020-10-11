
exports.up = async function(knex) {
  await knex.schema.createTable('users',table=>{
      table.increments('id')
      table.string('username')
      table.string('useraddress')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
