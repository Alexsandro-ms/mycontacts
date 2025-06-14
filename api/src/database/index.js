const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "root",
    password: "root",
    database: "mycontacts",
});

module.exports = {
    query: (text, params) => pool.query(text, params).then((res) => res.rows),
};
