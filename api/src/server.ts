import express from "express";
import cors from "cors";
import helmet from "helmet";
import initDB from "./config/db.config";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
initDB();

// Routes
app.get("/", (_req, res) => {
  res.json({ message: "Hello World!" });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
