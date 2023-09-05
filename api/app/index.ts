import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.get("/", (_req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
