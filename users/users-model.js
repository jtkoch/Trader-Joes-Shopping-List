const db = require("../data/dbConfig")

function find(){
  return db("users")
  .select("id", "username", "password", "first_name", "last_name")
}

function findBy(filter) {
  return db("users").where(filter)
}

function findById(id) {
  return db("users")
  .select("id", "username", "password", "first_name", "last_name")
  .where({id})
  .first()
}

async function insert(user) {
  return await db("users")
  .insert(user)
  .returning(["id", "username"])
}

function remove(id) {
  return db("users")
  .where({id})
  .del()
}

function update(changes, id) {
  return db("users")
  .where({id})
  .update(changes)
}

async function save(id, item) {
  await db("saved_items").insert({ 
    id, 
    item_id: item.item_id,
    item_name: item.name,
    item_price: item.price,
    item_category: item.category,
  })
  return db("saved_items").where({id, item_id: item.item_id})
}

function findSaved(id) {
  return db("saved_items").where({ id })
}

async function removeSaved(id, item_id) {
  const deleted = await findSavedById(id, item_id)
    .del()
  return { numberOfDeletedRecords: deleted }
}

module.exports = {
  find, 
  findBy, 
  findById, 
  insert, 
  remove, 
  update,
  save,
  findSaved,
  removeSaved
}