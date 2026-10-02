const fs = require("fs");
const path = require("path");

const db = require("../config/db");

// Read database schema
const schemaPath = path.join(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

// Create tables
db.exec(schema, (err) => {
  if (err) {
    console.error("Failed to create tables:", err.message);
    return;
  }

  console.log("Database tables created successfully");

  // Run product seed after tables are created
  try {
    require("./seed.js");
    console.log("Product seeding started...");
  } catch (error) {
    console.error("Failed to start product seeding:", error.message);
  }
});
