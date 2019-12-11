import express from "express";
import consign from "consign";

const PORT = 8000;
const app = express();

app.set("json spaces", 2);

consign()
  .include("models")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);

