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
    table.integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    table.integer("items_id")
      .references("id")
      .inTable("items")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")  
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("saved_items")
  await knex.schema.dropTableIfExists("items")
  await knex.schema.dropTableIfExists("users")
}