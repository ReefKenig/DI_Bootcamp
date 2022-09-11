const knex = require("knex");

/* Postgres credentials
    host: 127.0.0.1
    port: 5432
    user: postgres
    password: RkPs090320
*/

/* Heroku credentials
    host: 52.210.97.223
    port: 5432
    user: uzrrcxdmuspsvn
    password: ba20a1e82e1840abf1c312f57162d6eb084018b557e9be7fc614faa9e341410f
 */

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "RkPs090320",
    database: "dvdrental",
  },
});

db("employees")
  .select("*")
  .then((rows) => console.log(rows))
  .catch((err) => console.log(err));
