import express from "express";

const PORT = 8000;
const app = express();

app.get("/", (req, res) => res.send("Hello word"));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));