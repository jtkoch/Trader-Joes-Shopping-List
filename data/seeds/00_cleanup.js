exports.seed = async function(knex) {
	await knex("saved_items").truncate()
	await knex("items").truncate()
	await knex("users").truncate()
}