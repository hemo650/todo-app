const Pool =  require("pg").Pool; 
// configure connection to DB
const pool = new Pool({
    user: "postgres",
    password: "hemo650",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports  = pool;