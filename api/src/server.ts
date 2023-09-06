import express from "express";
import cors from "cors";
import helmet from "helmet";
import initDB from "./config/db.config";

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(helmet()); // Add security headers
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// Database
initDB(); // Initialize the database connection

// Routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello World!" }); // Respond with a JSON message
});

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}`)); // Start the server and log a message
