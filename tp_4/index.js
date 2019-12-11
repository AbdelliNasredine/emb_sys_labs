import express from "express";
import consign from "consign";

const PORT = 8000;
const app = express();

app.set("json spaces", 2);

consign()
  .include("models")
  .include("routes")
  .into(app);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
