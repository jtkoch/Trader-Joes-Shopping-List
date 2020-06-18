exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.string("username").notNull().unique()
    table.string("password").notNull()
    table.string("first_name").notNull()
    table.string("last_name").notNull()
  })

  await knex.schema.createTable("items", (table) => {
    table.increments("id")
    table.text("name").notNull()
    table.decimal("price").notNull() 
    table.string("category").notNull()
  })

  await knex.schema.createTable("saved_items", (table) => {
    table.increments("id")
    table.string("item_id").notNull()
    table.string("item_name").notNull()
    table.string("item_price").notNull()
    table.text("item_category").notNull()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("saved_items")
  await knex.schema.dropTableIfExists("items")
  await knex.schema.dropTableIfExists("users")
}