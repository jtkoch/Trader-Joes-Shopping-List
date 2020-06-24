const db = require("../data/dbConfig")

// function find(){
//   return db("items")
//   .select("name", "price", "category")
// }

// function findBy(filter) {
//   return db("items").where(filter)
// }

// function findById(id) {
//   return db("items")
//   .select("item_id", "name", "price", "category")
//   .where({id})
//   .first()
// }

// async function insert(item) {
//   return await db("items")
//   .insert(item)
//   .returning(["id", "name"])
// }

// function remove(id) {
//   return db("items")
//   .where({id})
//   .del()
// }

// function update(changes, id) {
//   return db("items")
//   .where({id})
//   .update(changes)
// }

// module.exports = {
//   find, 
//   findBy, 
//   findById, 
//   insert, 
//   remove, 
//   update
// }

function find() {
  return db("items")
    .orderBy("id", "asc")
}

function findBy(filter) {
  return db("items")
    .where(filter)
}

async function findById(id) {
  const item = await db("items").where({ id })
  return item.length === 0 ? null : item
}

async function insert(item) {
  const [id] = await db("items").insert(item)
  return findById(id)
}

function remove(id) {
  return db("items")
    .where({ id })
    .del()
}

async function update(id, updates) {
  await db("items")
    .where({ id })
    .update(updates)
    
  return findById(id)
}

module.exports = {
  find,
  findBy,
  findById,
  insert,
  remove,
  update
}