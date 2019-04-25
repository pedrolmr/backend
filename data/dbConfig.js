const knex = require("knex");
const config = require("../knexfile");

module.exports = knex(config[process.env.DB_ENV || "development"]);
// module.exports = knex(config[process.env.NODE_ENV || "development"]);
