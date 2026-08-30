const fs = require("fs");
const path = require("path");

const db = require("../config/db");

const schemaPath = path.join(__dirname, "schema.sql");

const schema = fs.readFileSync(schemaPath, "utf8");

db.exec(schema, (err) => {
    if (err) {
        console.error("Failed to create tables:", err.message);
        return;
    }

    console.log("Database tables created successfully");
});