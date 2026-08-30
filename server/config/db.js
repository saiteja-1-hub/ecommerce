const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname, "../database/database.db");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Database connected");
    }
});

db.run("PRAGMA foreign_keys = ON");

const schemaPath = path.join(__dirname, "../database/schema.sql");

const schema = fs.readFileSync(schemaPath, "utf8");

db.exec(schema, (err) => {
    if (err) {
        console.error("Error creating tables:", err.message);
    } else {
        console.log("Tables created successfully");
    }
});

module.exports = db;