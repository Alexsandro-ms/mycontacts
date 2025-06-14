const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

async function createDatabaseIfNotExists() {
    const client = new Client({
        host: "localhost",
        port: 5432,
        user: "root",
        password: "root",
        database: "postgres",
    });

    await client.connect();

    const res = await client.query(
        `SELECT 1 FROM pg_database WHERE datname='mycontacts'`
    );

    if (res.rowCount === 0) {
        await client.query(`CREATE DATABASE mycontacts`);
        console.log("✅ Database mycontacts created.");
    } else {
        console.log("ℹ️ Database already exists.");
    }

    await client.end();
}

async function runSchema() {
    const client = new Client({
        host: "localhost",
        port: 5432,
        user: "root",
        password: "root",
        database: "mycontacts",
    });

    await client.connect();

    const schemaPath = path.join(__dirname, "schema.sql");
    const sql = fs.readFileSync(schemaPath, "utf-8");

    await client.query(sql);

    console.log("✅ Schema executed (tables and extensions created).");

    await client.end();
}

async function setupDatabase() {
    await createDatabaseIfNotExists();
    await runSchema();
}

module.exports = { setupDatabase };
