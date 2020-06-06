const db = require("../data/dbConfig")

function find(){
  return db("items")
  .select("name", "price", "category")
}

function findBy(filter) {
  return db("items").where(filter)
}

function findById(id) {
  return db("items")
  .select("name", "price", "category")
  .where({id})
  .first()
}

async function insert(user) {
  return await db("items")
  .insert(user)
  .returning(["id", "name"])
}

function remove(id) {
  return db("items")
  .where({id})
  .del()
}

function update(changes, id) {
  return db("items")
  .where({id})
  .update(changes)
}

module.exports = {
  find, 
  findBy, 
  findById, 
  insert, 
  remove, 
  update
}