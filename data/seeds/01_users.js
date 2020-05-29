const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
	await knex("users").insert([   
    {
      username: "test_user1", 
      password: bcrypt.hashSync("password", 8),
      first_name: "John",
      last_name: "Doe"
    },
    {
      username: "test_user2", 
      password: bcrypt.hashSync("password", 8),
      first_name: "Jane",
      last_name: "Doe"
    }
	])
}